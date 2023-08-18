import { Component } from '@angular/core';
import { Certificate } from '../models/models';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  onClick(link:string){
    window.location.href = link;
  
  }
  certificateList: Certificate[] = [
    {
      institute: "Udemy ",
      course: 'Angular - The Complete Guide',
      link:'https://www.udemy.com/certificate/UC-2352664a-c16a-4c2c-9b66-3207de78724e/'
    
    },
    {
      institute: "Udemy",
      course: 'Angular & Node.js - The MEAN Stack Guide',
      link:'https://www.udemy.com/certificate/UC-e801e5d1-1868-4f39-a1a4-b0ab8b6b6081/'
    },
    
    
   
  ];

  constructor() {}

  ngOnInit(): void {}

}


