import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanerComponent } from './baner/baner.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { HonorsComponent } from './honors/honors.component';
import { CertificatesComponent } from './certificates/certificates.component';

const routes: Routes = [
  { path: '',component:BanerComponent},
  { path: 'about',component:PersonalInformationComponent},
  { path: 'education',component:EducationComponent},
  { path: 'work',component:WorkExperienceComponent},
  { path: 'skills',component:SkillsComponent} , 
  { path: 'projects',component:ProjectsComponent},
  { path: 'honors',component:HonorsComponent},
  { path: 'certificates',component:CertificatesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
