import { Component } from '@angular/core';
import { Honor } from '../models/models';

@Component({
  selector: 'app-honors',
  templateUrl: './honors.component.html',
  styleUrls: ['./honors.component.css']
})
export class HonorsComponent {
  educationList: Honor[] = [
    {
      institute: "Bsc. in Software Engineering,Izmir University of Economics ",
      course: 'Summa Cum Laude(Holding the Highest GPA)',
      duration: '2017-2022',
      score: '3.47/4.00',
    },
    {
      institute: "Bsc. in Software Engineering,Izmir University of Economics ",
      course: 'High Honor Student',
      duration: '2018-2019 Fall Term',
      score: '3.57/4.00',
    },
    {
      institute: "Bsc. in Software Engineering,Izmir University of Economics ",
      course: 'High Honor Student',
      duration: '2018-2019 Spring Term',
      score: '3.95/4.00',
    },
    
   
  ];

  constructor() {}

  ngOnInit(): void {}

}


