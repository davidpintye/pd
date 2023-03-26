import { Component } from '@angular/core';

interface Course {
  image: string,
  title: string,
  text: string,
  completed: boolean,
  certLink: string
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './courses.component.css'
  ]
})

export class CoursesComponent {
  courses: Course[] = [
    {
      image: 'https://img-b.udemycdn.com/course/480x270/756150_c033_2.jpg',
      title: 'Angular - The Complete Guide',
      text: 'Completed!',
      completed: true,
      certLink: 'https://www.udemy.com/certificate/UC-c506d867-9ae1-4193-b363-07112ac20dd4/'
    },
    {
      image: 'https://img-b.udemycdn.com/course/480x270/4015622_2fee_4.jpg',
      title: '100 Days Of Code - Web Development Bootcamp',
      text: 'Completed!',
      completed: true,
      certLink: 'https://www.udemy.com/certificate/UC-2cb77490-fa6b-42df-b547-763dac440e53/'
    },
    {
      image: 'https://img-b.udemycdn.com/course/480x270/1512962_9f57.jpg',
      title: 'Angular (Full App) with Angular Material, Angularfire & NgRx',
      text: 'Completed!',
      completed: true,
      certLink: 'https://www.udemy.com/certificate/UC-d9657c7f-91af-4c6b-9930-86eedae53d81/'
    },
    {
      image: 'https://img-b.udemycdn.com/course/480x270/707962_71f5_4.jpg',
      title: 'Javascript Essentials',
      text: 'Completed, but it is a free course, so Udemy do not provide certification link.',
      completed: true,
      certLink: 'https://www.udemy.com/course/javascript-essentials/learn/lecture/4393202?start=15#overview'
    },
    {
      image: 'https://img-b.udemycdn.com/course/480x270/1406344_1d65_3.jpg',
      title: 'JavaScript Algorithms and Data Structures Masterclass',
      text: 'In progress...',
      completed: false,
      certLink: 'https://www.udemy.com/course/javascript-essentials/learn/lecture/4393202?start=15#overview'
    }
  ]
}
