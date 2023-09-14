import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  isMenu = false;

  constructor(
    private bpObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.bpObserver.observe(['(max-width: 1024px)']).subscribe(result => {
      if (result.matches) {
        this.drawer.close();
        this.isMenu = true;
      } else {
        this.isMenu = false;
      }
    });
  }
}
