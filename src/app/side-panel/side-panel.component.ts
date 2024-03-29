import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Skill } from '../classes/skill';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent {
  @Input() isA4!: boolean;
  @Input() isPrintMode!: boolean;
  @Input() isEng!: boolean;
  langSubscription = new Subscription();
  skills: Skill[] = [
    new Skill('Angular', 'assets/skills/angular-icon-1.svg', 90),
    new Skill('HTML5', 'assets/skills/html-1.svg', 95),
    new Skill('CSS', 'assets/skills/css-3.svg', 80),
    new Skill('JavaScript', 'assets/skills/logo-javascript.svg', 85),
    new Skill('TypeScript', 'assets/skills/typescript.svg', 85),
    new Skill('Git', 'assets/skills/git-icon.svg', 65),
    new Skill('Java', 'assets/skills/javae.svg', 55),
    new Skill('Spring Boot', 'assets/skills/spring_boot.png', 40),
    new Skill('Node.js', 'assets/skills/nodejs-1.svg', 50),
    new Skill('Bootstrap', 'assets/skills/bootstrap-4.svg', 75),
    new Skill('Firebase Auth & Db', 'assets/skills/firebase-1.svg', 50),
    new Skill('MongoDB', 'assets/skills/mongodb-icon-1.svg', 50),
    new Skill('Python', 'assets/skills/python-5.svg', 25),
  ];
}
