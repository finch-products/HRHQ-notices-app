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
  { id: 1, name: 'Bellandur', confirmed: false, location: 'Mahadevpura' , city: 'Bengaluru', state: 'Karnataka' },
  { id: 2, name: 'Marathali', confirmed: true,  location: 'Whitefeild' , city: 'Bengaluru', state: 'Karnataka' },
  { id: 3, name: 'Gandhi Road', confirmed: false,  location: 'Hebbal' , city: 'Bengaluru', state: 'Karnataka' },
];


export const notices: Notice[] = [
  { branchId: 1, status: 'pending',  seen: false, confirmed: false, title: 'Specific Branch Notice',  url: 'assets/notices/notice-1.jpeg'  },
  { branchId: 1, status: 'confirmed', seen: true, confirmed: true, title: 'Specific Branch Notice',  url: 'assets/notices/notice-2.jpeg' },
  { branchId: 2, status: 'pending',  seen: false, confirmed: false, title: 'Specific Branch Notice',  url: 'assets/notices/notice-3.jpeg' },
  { branchId: 2, status: 'pending',  seen: true, confirmed: false, title: 'Branch Specific Notice',  url: 'assets/notices/notice-2.jpeg' },
  { branchId: 2, status: 'pending',  seen: false, confirmed: false, title: 'Branch Specific Notice',  url: 'assets/notices/notice-3.jpeg' },
  { branchId: 2, status: 'pending',  seen: false, confirmed: false, title: 'Branch Specific Notice',  url: 'assets/notices/notice-2.jpeg' }
];

export const noticeCount = [
  {
    date: '2023-11-02',
    documents: [
      { title: 'Branch Specific Notice', url: 'assets/notices/notice-1.jpeg' },
      { title: 'Branch Specific Notice', url: 'assets/notices/notice-2.jpeg' },
      { title: 'Specific Branch Notice', url: 'assets/notices/notice-4.jpg' }
    ]
  },
  {
    date: '2023-11-03',
    documents: [
      { title: 'Specific Branch Notice', url: 'assets/notices/notice-3.jpeg' },
      { title: 'Specific Branch Notice', url: 'assets/notices/notice-1.jpeg' }
    ]
  },
  {
    date: '2023-11-04',
    documents: [
      { title: 'Specific Branch Notice', url: 'assets/notices/notice-1.jpeg' }
    ]
  }
];


