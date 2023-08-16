import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Izmir University of Economics",
      course: 'MSc. in Computer Engineering',
      duration: '2022-2024',
      state:"Currently Studying",
      payment:"Full Scholarship",
      score: '3.33/4.00',
    },
    {
      institute: 'Izmir University of Economics',
      course: 'BSc. in Software Engineering',
      duration: '2017-2022',
      state:"Graduated",
      payment:"Full Scholarship",
      score: '3.47/4.00',
    },
  
    {
      institute: 'Bartın Fen Lisesi',
      course: 'High School ',
      duration: '2013-2017',
      state:"Graduated",
      payment:"-",
      score: '91.38/100',
    },
   
  ];

  constructor() {}

  ngOnInit(): void {}
}
