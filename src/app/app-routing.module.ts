import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  {
    path: '',

    component: BannerComponent,

  },
  {
    path: 'banner',
    
    component: BannerComponent,

  },
  {
    path: 'education',
    component: EducationComponent,

  },
   {
    path: '404',
    component: NotfoundComponent,

  },
  {
    path: 'skills',
    component: SkillsComponent,
  
  },
  {
    path: 'contact',
    component: ContactComponent,

  },
  {
    path: 'comingsoon',

    component: ComingsoonComponent,

  },

  {
    path: 'certifications',

    component: CertificationsComponent,

  },
  {
    path: 'projects',
    component: ProjectsComponent,

  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
