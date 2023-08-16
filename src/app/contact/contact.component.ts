import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  onGmail(){
    window.location.href = "mailto:burakerdogan749@gmail.com";
    
  }

  onLinkedin(){
    window.location.href = "https://www.linkedin.com/in/burakerdogan1/";


  };

  onGithub(){
    window.location.href = "https://github.com/burakerdgn1";

  };

  ngOnInit(): void {
  }

}
