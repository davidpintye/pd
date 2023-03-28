import { Component } from '@angular/core';

export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  gitHubRepo: string;
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
      description: 'With this project you could make your own Hungarian Playing Card Deck. I used Firebase authentication and db. Style made by Angular Material and pure CSS.',
      imageUrl: 'assets/projects/cm.png',
      projectUrl: 'https://cardmaker-1d2fe.web.app/',
      gitHubRepo: 'https://github.com/Davi-hub/cardMaker'
    },
    {
      name: 'Personal webpage',
      description: 'This smaller project is this webpage, where I try introduce myself and my projects. I used Angular framework, for design Angular Material, Bootstrap (at Courses component) and pure CSS.',
      imageUrl: 'assets/projects/pd.png',
      projectUrl: 'project2',
      gitHubRepo: 'https://github.com/Davi-hub/pd'
    },
    {
      name: 'PlanMyKitchen',
      description: 'This pet project provides assistance in designing kitchen plans. The first phase is completed for now. To resize the SVG elements, simply drag the corner of the element to the desired size.',
      imageUrl: 'assets/projects/pmk.png',
      projectUrl: 'https://davi-hub.github.io/plan-my-kitchen/',
      gitHubRepo: 'https://github.com/Davi-hub/plan-my-kitchen'
    }
  ];
}
