import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  menus: any;
  subjects: any;
  showAlert = true;

  constructor(private router: Router, private storeService: StoreService, private toastr: ToastrService) {
    this.menus = [{
      label: 'Past Trials',
      action: '',
    },
    {
      label: 'How It Works',
      action: '',
    },
    {
      label: 'Log In/Sign Up',
      action: '',
    },
    ];
  }

  ngOnInit() {
    this.getSubjects();
  }

  /**
   * 
   */
  showSuccess() {
    this.toastr.success('Thank you for voting!', '');
  }
  /**
   * obtains dthe subjects list
   */
  async getSubjects() {

    await this.storeService.getListSubjects().subscribe(async (res: any) => {
      const r = res;
      if (r) {
        this.subjects = r.subjects;
        await this.subjects.forEach(element => {
          const subj = JSON.parse(localStorage.getItem('subject' + element.id));
          if (!subj) { localStorage.setItem('subject' + element.id, JSON.stringify(element)); }
        });
        this.calculateVotes();
      }
    });

  }

  closeAlert() {
    this.showAlert = false;
  }

  goToBlank() {
    this.router.navigate(['blank']);
  }

  /**
   * saves the votes for a subject
   * @param event 
   */
  voteForSubject(event) {

    this.showSuccess();
    console.log(event);
    const x = JSON.parse(event);
    const subject = x.subject;
    const type = x.type;
    const subj = JSON.parse(localStorage.getItem('subject' + subject.id));
    if (subj) {
      if (type == 'like') {
        subj.likes = subj.likes + 1;
      } else {
        subj.dislikes = subj.dislikes + 1;
      }
      localStorage.setItem('subject' + subject.id, JSON.stringify(subj));
      this.storeService.pushSubject(subj);
    } else {
      if (type == 'like') {
        subject.likes = subject.likes + 1;
      } else {
        subject.dislikes = subject.dislikes + 1;
      }
      localStorage.setItem('subject' + subject.id, JSON.stringify(subject));
      this.storeService.pushSubject(subject);
    }
    this.calculateVotes();
  }

  calculateVotes() {
    this.subjects.forEach(element => {
      const subj = JSON.parse(localStorage.getItem('subject' + element.id));
      if (subj) {
        element.likes = subj.likes;
        element.dislikes = subj.dislikes;

        const total = parseInt(element.likes) + parseInt(element.dislikes);
        // element.percentLike = element.likes != 0 ? ((parseInt(element.likes) * 100 / total)).toString() + '%' : 
        if (element.likes != 0) {
          element.percentLike = ((parseInt(element.likes) * 100 / total)).toString() + '%'
        } else {
          if (element.percentDislikeView == 0 || element.percentDislikeView == 100) {
            element.percentLike = '0%'
          }
          else {
            element.percentLike = '50%'
          };
        }

        if (element.dislikes != 0) {
          element.percentDislike = (parseInt(element.dislikes) * 100 / total).toString() + '%';
        } else {
          if (element.percentLikeView == 100 || element.percentLikeView == 0) {
            element.percentDislike = '0%'
          } else {
            element.percentDislike = '50%';
          }
        }
        element.percentLikeView = element.likes != 0 ? ((parseInt(element.likes) * 100 / total)) : 0;
        element.percentDislikeView = element.dislikes != 0 ? (parseInt(element.dislikes) * 100 / total) : 0;
      } else {
        element.percentLike = '50%';
        element.percentDislike = '50%';
        element.percentLikeView = 0;
        element.percentDislikeView = 0;
      }
    });
  }
}




