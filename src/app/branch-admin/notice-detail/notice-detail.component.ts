import { Component, Input } from '@angular/core';

interface Notice {
  title: string;
  document: string;
  uploadedOn: string;
}

@Component({
  selector: 'app-notice-detail',
  templateUrl: './notice-detail.component.html',
})
export class NoticeDetailComponent {

  mockNotices: Notice[] = [
    { title: 'Notice 1', document: 'assets/notices/notice-1.jpeg', uploadedOn: '2021-10-01' },
    { title: 'Notice 2', document: 'assets/notices/notice-2.jpeg', uploadedOn: '2021-10-02' },
  ];

  @Input() notices: Notice[] = [];
  uploadedProofs: File[][] = [];

  uploadProof(index: number, files: FileList | null): void {
    if (files) {
      this.uploadedProofs[index] = Array.from(files);
    }
  }
}
