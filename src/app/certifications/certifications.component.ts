import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Certification } from '../models/model';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class CertificationsComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {
  }

}
