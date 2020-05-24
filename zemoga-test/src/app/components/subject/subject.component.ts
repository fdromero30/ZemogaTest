import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.scss']
})

export class SubjectComponent implements OnInit {

    @Input() sub: any

    menus: any;

    numeroSuerte: number;

    constructor() {

    }
    ngOnInit() {
        this.numeroSuerte = 0;
    }

    /**
     * 
     * @param subject 
     */
    voteForSubject(subject: any) {
        const subj = JSON.parse(localStorage.getItem('subject' + subject.id));
        if (subject.votedLike) {
            subj.likes = subj.likes + 1;
        } else if (subject.votedDislike) {
            subj.dislikes = subj.dislikes + 1;
        }
        localStorage.setItem('subject' + subject.id, JSON.stringify(subj));
    }
}




