import { Document, Branch, Notice } from './model/dashboard.model';

export const mockDocuments: Document[] = [
  { id: 1, title: 'Doc 1', sentOn: '2023-11-01', branchId: 1, acknowledged: false, seen: false },
  { id: 2, title: 'Doc 2', sentOn: '2023-11-01', branchId: 2, acknowledged: true, seen: true },
  { id: 3, title: 'Doc 3', sentOn: '2023-11-02', branchId: 1, acknowledged: false, seen: true },
  { id: 1, title: 'Doc 1', sentOn: '2023-11-02', branchId: 1, acknowledged: false, seen: false },
  { id: 2, title: 'Doc 2', sentOn: '2023-11-02', branchId: 2, acknowledged: true, seen: true },
  { id: 3, title: 'Doc 3', sentOn: '2023-11-02', branchId: 1, acknowledged: false, seen: true },
  { id: 4, title: 'Doc 4', sentOn: '2023-11-02', branchId: 1, acknowledged: false, seen: false },
];

export const mockBranches: Branch[] = [
  { id: 1, name: 'Bellandur', confirmed: false },
  { id: 2, name: 'Marathalli', confirmed: true },
  { id: 3, name: 'Branch 3', confirmed: false },
];


export const notices: Notice[] = [
  { branchId: 1, status: 'pending', seen: false, confirmed: false, title: 'Notice 1' },
  { branchId: 1, status: 'confirmed', seen: true, confirmed: true, title: 'Notice 2' },
  { branchId: 2, status: 'pending', seen: false, confirmed: false, title: 'Notice 3' },
  { branchId: 2, status: 'pending', seen: true, confirmed: false, title: 'Notice 4' },
];


