import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DownloadDialogComponent } from '../download-dialog/download-dialog.component';

@Component({
  selector: 'app-cv-container',
  templateUrl: './cv-container.component.html',
  styleUrls: ['./cv-container.component.css']
})
export class CvContainerComponent {
  isA4 = false;
  isPrintMode = false;
  isEng = true;
  @ViewChild('cv') cv!: ElementRef;

  constructor(private router: Router, public dialog: MatDialog) { }

  // async downloadCv() {
  //   await html2canvas(this.cv.nativeElement).then((canvas) => {
  //     let image = canvas.toDataURL();
  //     let doc = new jsPDF('p', 'mm', 'a4', false);
  //     doc.addImage(image, 'a4', 0, 0, 210, 297)
  //     doc.save('David_Pintye.pdf')
  //   })
  // }

  downloadCv() {
    const dialogRef = this.dialog.open(DownloadDialogComponent, {
      width: '300px'
    });
  }

  printCv() {
    if (this.isEng) {
      this.router.navigate(['print-eng'],);
    } else {
      this.router.navigate(['print-hun'],);
    }
  }

  onLang(lang: string) {
    if (lang === 'eng') {
      this.isEng = true;
    } else {
      this.isEng = false;
    }
  }

}
