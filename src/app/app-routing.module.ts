import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
   { path: '', component: HomeComponent, data: {animation: 'Home'} },
   { path: 'about', component: AboutComponent, data: {animation: 'About'} },
   { path: 'skill', component: SkillComponent, data: {animation: 'Skill'} },
   { path: 'contact', component: ContactComponent, data: {animation: 'Contact'} },
   { path: 'project', component: ProjectComponent, data: {animation: 'Project'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
