import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  onClick(link:string){
    window.location.href = link;
  
  }
  onClickAll(){
    window.location.href = "https://github.com/burakerdgn1"

  }
  projects: Project[] = [
    {
      title: 'Shop-Recipe App',
      technologies: 'Angular, TypeScript, NgRx, Bootstrap',
      description: [
        'Personal Project',
        'Developed a simple web application to learn Angular',
        'An example recipe and shopping list web application',
        
      ],
      imagePath:"assets/chicken.png",
      link:"https://github.com/burakerdgn1"

      
    },
    {
      title: 'Ecommerce Website',
      technologies: 'HTML,CSS,Javascript,jQuery',
      description: [
        'Internship Project',
        'Developed the frontend side of an ecommerce website',
        'A simple website for shopping'
        
      ],
      imagePath:"assets/ecommerce.PNG",
      link:"https://github.com/burakerdgn1/EcommerceWebsite"

    },
    {
      title: 'Subscription App',
      technologies: 'Flutter,PostgreSQL,Hasura & GraphQL,Firebase  ',
      description: [
        'Senior Project in BSc.',
        'Worked as a team to develop a mobile application',
        'In app, people can check their subscriptions and businesses they subscribed to can also trace their customers',
      ],
      imagePath:"assets/sub_app_logo.png",
      link:"https://github.com/burakerdgn1/SubscriptionApp"

    },
    {
      title: 'Post App',
      technologies: 'Angular,Angular Material,TypeScript, Node.js, MongoDB, Express',
      description: [
        'Personal Project',
        'Developed a simple web application to learn MEAN Stack.',
        'An example web application for sharing posts',
      ],
      imagePath:"assets/post.png",
      link:"https://github.com/burakerdgn1/MEAN-Test"

    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
