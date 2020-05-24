import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  menus: any;
  subjects: any;
  numeroSuerte: number;

  constructor() {
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
    this.subjects = [
      {
        name: 'Kanye West',
        sublabel: '1 month  ago in Entertaiment',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Anenean  eu velit  liibero',
        like: true,
        dislike: true,
        voteNow: true,
        photo: ''

      },
      {
        name: 'Mark Zuckerberg',
        sublabel: '1 month  ago in Entertaiment',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Anenean  eu velit  liibero',
        like: true,
        dislike: true,
        voteNow: true,
        photo: ''
      },
      {
        name: 'Cristina Fernández de  kirckner',
        sublabel: '1 month  ago in Entertaiment',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Anenean  eu velit  liibero',
        like: true,
        dislike: true,
        voteNow: true,
        photo: ''
      },
      {
        name: 'Malalá Yousafzai',
        sublabel: '1 month  ago in Entertaiment',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Anenean  eu velit  liibero',
        like: true,
        dislike: true,
        voteNow: true,
        photo: ''
      }
    ];
  }

  ngOnInit() {
    this.numeroSuerte = 0;
  }
}




