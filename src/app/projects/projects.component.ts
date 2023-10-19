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
      name: 'Palace (frontend)',
      description: 'This is the frontend of my project for a card game called Palace. It was built using the Angular framework. To communicate with the backend server I used http methods, but I would like to make this project with Websockets as well.',
      imageUrl: 'assets/projects/palace.png',
      projectUrl: 'https://palace-24472.web.app/',
      gitHubRepo: 'https://github.com/Davi-hub/palace_fe'
    },
    {
      name: 'Palace (backend)',
      description: 'This is the backend of my project for a card game called Palace. It was built using Spring Boot. To communicate with the frontend server I used http methods, but I would like to make this project with Websockets as well.',
      imageUrl: 'assets/projects/palace.png',
      projectUrl: 'https://palace-24472.web.app/',
      gitHubRepo: 'https://github.com/Davi-hub/palace_be'
    },
    {
      name: 'CardMaker',
      description: 'With this project you could make your own Hungarian Playing Card Deck. I used Firebase authentication and db. Style made by Angular Material and CSS.',
      imageUrl: 'assets/projects/cm.png',
      projectUrl: 'https://cardmaker-1d2fe.web.app/',
      gitHubRepo: 'https://github.com/Davi-hub/cardMaker'
    },
    {
      name: 'Personal webpage',
      description: 'This smaller project is this webpage, where I try introduce myself and my projects. I used Angular framework, for design Angular Material, Bootstrap (at Courses component) and CSS.',
      imageUrl: 'assets/projects/pd.png',
      projectUrl: 'https://davi-hub.github.io/pd/',
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
