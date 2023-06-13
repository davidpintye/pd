import { Component, Input } from '@angular/core';
import { Skill } from './skill';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent {
  @Input() isA4!: boolean;
  @Input() isPrintMode!: boolean;
  skills: Skill[] = [
    new Skill('Angular', 'assets/skills/angular-icon-1.svg', 65),
    new Skill('HTML5', 'assets/skills/html-1.svg', 65),
    new Skill('CSS', 'assets/skills/css-3.svg', 60),
    new Skill('JavaScript', 'assets/skills/logo-javascript.svg', 60),
    new Skill('TypeScript', 'assets/skills/typescript.svg', 60),
    new Skill('Git', 'assets/skills/git-icon.svg', 50),
    new Skill('Node.js', 'assets/skills/nodejs-1.svg', 45),
    new Skill('Firebase Auth @ Db', 'assets/skills/firebase-1.svg', 45),
    new Skill('Java', 'assets/skills/javae.svg', 40),
    new Skill('Python', 'assets/skills/python-5.svg', 25),
    new Skill('Bootstrap', 'assets/skills/bootstrap-4.svg', 25),
    new Skill('MongoDB', 'assets/skills/mongodb-icon-1.svg', 20),
  ];
}
