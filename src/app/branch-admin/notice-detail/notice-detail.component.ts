import { AuthService } from 'src/app/auth.service';
import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Notice {
  title: string;
  document: string;
  uploadedOn: string;
  proof: string;
}

@Component({
  selector: 'app-notice-detail',
  styleUrls: ['./notice-detail.component.scss'],
  templateUrl: './notice-detail.component.html',
})
export class NoticeDetailComponent {
  mockNotices: Notice[] = [
    { title: 'Notice 1', document: 'assets/notices/notice-1.jpeg', uploadedOn: '2021-10-01', proof: 'assets/notices/notice-1.jpeg' },
    { title: 'Notice 2', document: 'assets/notices/notice-2.jpeg', uploadedOn: '2021-10-02', proof: 'assets/notices/notice-2.jpeg' },
    { title: 'Notice 3', document: 'assets/notices/notice-1.jpeg', uploadedOn: '2021-10-01', proof: 'assets/notices/notice-1.jpeg' },
    { title: 'Notice 4', document: 'assets/notices/notice-1.jpeg', uploadedOn: '2021-10-01', proof: 'assets/notices/notice-1.jpeg' },
    { title: 'Notice 5', document: 'assets/notices/notice-1.jpeg', uploadedOn: '2021-10-01', proof: 'assets/notices/notice-1.jpeg' },
  ];

  @Input() notices: Notice[] = [];
  uploadedProofs: File[][] = [];


  constructor(public authService: AuthService, private snackBar: MatSnackBar) {

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: 'custom-snackbar'
    });
  }

  uploadProof(index: number, files: FileList | null): void {
    if (files) {
      this.uploadedProofs[index] = Array.from(files);
      this.openSnackBar('File uploaded!', 'Close');
    }
  }
}
