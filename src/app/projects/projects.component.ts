import { Component } from '@angular/core';

export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  detailsUrl: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'CardMaker',
      description: 'With this project you could make your own Hungarian Playing Card Deck. I used Firebase authentication and db, style made by Angular Material and pure CSS.',
      imageUrl: '../../assets/cm.png',
      detailsUrl: 'https://cardmaker-1d2fe.web.app/'
    },
    {
      name: 'My own page',
      description: 'This smaller project is this webpage, where I try introduce myself and my projects. I used Angular framework, for design Angular Material, Bootstrap (at Courses component) and pure CSS.',
      imageUrl: '../../assets/pd.png',
      detailsUrl: 'project2'
    },
    {
      name: 'Project 3',
      description: 'This is the third project',
      imageUrl: '../../assets/cm.png',
      detailsUrl: 'project3'
    }
  ];
}
