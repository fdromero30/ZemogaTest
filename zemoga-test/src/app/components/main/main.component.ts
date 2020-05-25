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
  getSubjects() {

    this.storeService.getListSubjects().subscribe((res: any) => {
      const r = res;
      if (r) {
        this.subjects = r.subjects;
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
        element.percentLike = ((parseInt(element.likes) * 100 / total)).toString() + '%';
        element.percentDislike = (parseInt(element.dislikes) * 100 / total).toString() + '%';
        element.percentLikeView = ((parseInt(element.likes) * 100 / total));
        element.percentDislikeView = (parseInt(element.dislikes) * 100 / total);

      }
    });
  }
}




