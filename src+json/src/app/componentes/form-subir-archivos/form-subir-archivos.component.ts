import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../servicios/firebase/file-upload.service';
import { FileForUpload } from '../../modelos/file-for-upload';

@Component({
  selector: 'app-form-subir-archivos',
  templateUrl: './form-subir-archivos.component.html',
  styleUrls: ['./form-subir-archivos.component.css']
})

export class FormSubirArchivosComponent implements OnInit {
  selectedFiles?: FileList;
  currentFileUpload?: FileForUpload;
  percentage = 0;

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new FileForUpload(file);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
          percentage => {
            this.percentage = Math.round(percentage ? percentage : 0);
          },
          error => {
            console.log(error);
          }
        );
      }
    }

  }
}