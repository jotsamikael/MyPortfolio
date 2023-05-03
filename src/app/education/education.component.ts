import { Component, OnInit } from '@angular/core';
import { Education } from '../models/model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Institut St jean",
      course: 'Management of System Information',
      duration: '2017-2022',
      score: 'Eng degree',
    },
    {
      institute: 'St Benedict Catholic Bilingual College',
      course: 'S5 (Maths, Physics, Chemistry, Computer Science and Further Maths',
      duration: '2015-2017',
      score: 'GCE A/L',
    },
    {
      institute: 'St Benedict Catholic Bilingual College',
      course: 'Science field',
      duration: '2010-2015',
      score: 'GCE O/L',
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
