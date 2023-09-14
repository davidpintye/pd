import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-cv-container',
  templateUrl: './cv-container.component.html',
  styleUrls: ['./cv-container.component.css']
})
export class CvContainerComponent{
  isA4 = false;
  isPrintMode = false;
  @ViewChild('cv') cv!: ElementRef;

  constructor(private router: Router) { }

  async downloadCv() {
    await html2canvas(this.cv.nativeElement).then((canvas) => {
      let image = canvas.toDataURL();
      let doc = new jsPDF('p', 'mm', 'a4', false);
      doc.addImage(image, 'a4', 0, 0, 210, 297)
      doc.save('David_Pintye.pdf')
    })
  }

  printCv() {
    this.router.navigate(['print'], );
  }

}
