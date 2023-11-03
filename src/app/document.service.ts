// src/app/document.service.ts
import { Injectable } from '@angular/core';
import { GroupedEntry } from './model/dashboard.model';
import { mockDocuments, mockBranches } from './mock-data';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private documents = mockDocuments;
  private branches = mockBranches;

  getDocumentsByDateAndBranch(): {
    date: string;
    branch: string;
    documentCount: number;
  }[] {
    const grouped: { [key: string]: GroupedEntry } = {};

    this.documents.forEach((doc) => {
      const key = `${doc.sentOn}-${doc.branchId}`;
      grouped[key] = grouped[key] || {
        date: doc.sentOn,
        branchId: doc.branchId,
        documentCount: 0,
      };
      grouped[key].documentCount++;
    });

    const result = Object.values(grouped).map((entry) => {
      const castedEntry = entry as GroupedEntry;
      const branch = this.branches.find((b) => b.id === castedEntry.branchId);
      return {
        date: castedEntry.date,
        branch: branch ? branch.name : 'Unknown',
        documentCount: castedEntry.documentCount,
      };
    });

    return result;
  }
}
