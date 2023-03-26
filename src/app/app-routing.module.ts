import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path: 'cv', component: CvComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'courses', component: CoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
