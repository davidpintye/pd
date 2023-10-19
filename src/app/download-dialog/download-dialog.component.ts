import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-download-dialog',
  templateUrl: './download-dialog.component.html',
  styleUrls: ['./download-dialog.component.css']
})
export class DownloadDialogComponent {
  constructor(public dialogRef: MatDialogRef<DownloadDialogComponent>) { }

  downloadCv(lang: string) {

  }

  close() {
    this.dialogRef.close();
  }
}
