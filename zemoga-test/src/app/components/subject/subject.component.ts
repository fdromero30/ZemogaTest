import { Component, OnInit, Input, Output } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { EventEmitter } from '@angular/core';


@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.scss']
})

export class SubjectComponent implements OnInit {

    @Input() sub: any
    @Output() out = new EventEmitter();

    menus: any;
    valueLikes: any;
    valueDislikes: any;
    typeSelected: any;

    constructor(private storeService: StoreService) {
        this.valueLikes = 0;
        this.valueDislikes = 0;
    }
    ngOnInit() {
    }

    /**
     * 
     * @param subject 
     */
    voteForSubject(subject: any) {

        this.out.emit(JSON.stringify({ subject: subject, type: this.typeSelected }));
        this.sub.voteAgain = true;
        this.typeSelected = null;
    }
    /**
     * 
     */
    setLike() {
        this.typeSelected = 'like';
    }

    /**
     * 
     */
    setDislike() {
        this.typeSelected = 'dislike';
    }

    voteAgain() {
        this.sub.voteAgain = false;
    }
}




