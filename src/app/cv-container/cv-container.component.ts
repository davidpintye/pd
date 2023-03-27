import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-cv-container',
  templateUrl: './cv-container.component.html',
  styleUrls: ['./cv-container.component.css']
})
export class CvContainerComponent {
  isA4 = false;
  isPrintMode = false;
  @ViewChild('cv') cv!: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  async downloadCv() {
    // const pdf = new jsPDF('p', 'mm', 'a4',);
    // pdf.html(this.cv.nativeElement, {
    //   callback: function(doc) {
    //       // Save the PDF
    //       doc.save('sample-document.pdf');
    //   }})
    var svgElements = document.body.querySelectorAll('svg');
    svgElements.forEach(function (item: any) {
      item.setAttribute("width", item.getBoundingClientRect().width);
      item.setAttribute("height", item.getBoundingClientRect().height);
      item.style.width = null;
      item.style.height = null;
    });
    await html2canvas(this.cv.nativeElement).then((canvas) => {
      let image = canvas.toDataURL();
      const link = document.createElement('a');
      link.href = image;
      link.download = 'image.png';
      link.click();
      let doc = new jsPDF('p', 'mm', 'a4', false);
      doc.addImage(image, 'a4', 0, 0, 210, 297)
      doc.save('David_Pintye.pdf')

    })

    // html2canvas(this.cv.nativeElement, { scrollY: -window.scrollY }).then(function (canvas) {
    //   var img = canvas.toDataURL();
    //   window.open(img);
    // });

  }

  async fromHtmlToPng(element: HTMLElement) {
    await html2canvas(element).then((canvas) => {
      this.fromPngToPdf(canvas)
    })
  }

  async fromPngToPdf(canvas: HTMLElement) {
    let pdf = new jsPDF('p', 'mm', 'a4', true);
    pdf.html(this.cv.nativeElement, { x: 0, y: 0, width: 210 });
    pdf.save('cards.pdf');
  }

  printCv() {
    this.router.navigate(['print']);
    this.isA4 = true;
    this.isPrintMode = true;
    setTimeout(()=>window.print(),3000)

  }

}
