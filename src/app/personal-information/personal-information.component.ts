import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
   myData: string[][] = [
    ['Full Name', 'JOTSA NGUETSOP Mikael'],
    ['DOB', '01/10/1998'],
    ['Work Exp', '1 Years'],
    ['Education', 'M.S (2023)'],
    ['Interests', 'Infographics ,Gaming, Philosophy, Football'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Engineer in management of information system with one year of professional experience.',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    'Currently, working as devOps at ADSNET',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
