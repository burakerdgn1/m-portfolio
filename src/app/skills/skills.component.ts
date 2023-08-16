import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular',
      level: 'Basic',
      rating: 40,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Intermediate',
      rating: 60,
    },
    {
      name: 'Java',
      level: 'Intermediate',
      rating: 55,
    },
    {
      name: 'Flutter',
      level: 'Intermediate',
      rating: 50,
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
