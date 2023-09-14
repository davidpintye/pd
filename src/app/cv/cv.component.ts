import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit, AfterViewInit {
  @Input() isA4 = true;
  @Input() isPrintMode!: boolean;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.isA4 = data.isA4;
      this.isPrintMode = data.isPrintMode;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if(this.isA4 && this.isPrintMode) window.print();
    }, 0);
  }
}

// orientation: 'l', format: 'a4', w: 297, h: 210 }
