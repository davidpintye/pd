import { Component } from '@angular/core';

@Component({
  selector: 'app-responsive-bar',
  templateUrl: './responsive-bar.component.html',
  styleUrls: ['./responsive-bar.component.css']
})
export class ResponsiveBarComponent {
  windowWidths = [320,375,425,768,1024,1440]

  newWindow(width: number) {
    window.open(window.location.toString(), "responsive"+width+'Px', "width="+width+",height=500,toolbar=no,status=no");
  }
}
