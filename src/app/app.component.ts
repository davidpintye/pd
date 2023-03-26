import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pd';

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
