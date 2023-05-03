import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Intermidiate',
      rating: 75,
    },
    {
      name: 'Java, Java FX',
      level: 'Intermidiate',
      rating: 75,
    },
 
    {
      name: 'HTML, CSS, JS',
      level: 'Good',
      rating: 80,
    },
    {
      name: 'Java, SpringBoot',
      level: 'Good',
      rating: 87,
    },
    {
      name: 'Node js, express',
      level: 'Intermidiate',
      rating: 70,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
