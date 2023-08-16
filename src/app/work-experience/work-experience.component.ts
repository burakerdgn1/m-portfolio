import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Web Developer Intern',
      company: 'OSF Digital',
      duration: 'Summer 2021',
      description: [
        'Worked to develop an ecommerce website.',
        'Worked with HTML, CSS, JavaScript, jQuery technologies.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
