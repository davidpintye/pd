import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CvContainerComponent } from './cv-container/cv-container.component';
import { CvComponent } from './cv/cv.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cv' },
  { path: 'print', component: CvComponent , data: {isA4: true, isPrintMode: true}},
  {
    path: '', component: MainComponent, children: [
      { path: 'cv', component: CvContainerComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'courses', component: CoursesComponent },
    ]
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
