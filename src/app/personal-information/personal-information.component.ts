import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {

  aboutMe: string[] = [

    'A fresh graduate software engineer.', 'Recently graduated from IUE Software Engineering Department as Summa Cum Laude (holding the highest GPA).', 'Dedicated and practical person possesses good theoretical knowledge and technical skills as well as a desire to learn.',
    'Currently doing the master\'s degree in Artificial Intelligence field at Izmir University of Economics, Department of Computer Engineering.',
    'Enthusiastic to work as a software developer in a challenging environment.'
  ];

  constructor() {}

  ngOnInit(): void {}
}
