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
  { id: 1, name: 'Branch 1', confirmed: false, location: 'Mahadevpura' , city: 'Bengaluru', state: 'Karnataka' },
  { id: 2, name: 'Branch 2', confirmed: true,  location: 'Whitefeild' , city: 'Bengaluru', state: 'Karnataka' },
  { id: 3, name: 'Branch 3', confirmed: false,  location: 'Hebbal' , city: 'Bengaluru', state: 'Karnataka' },
];


export const notices: Notice[] = [
  { branchId: 1, status: 'pending',  seen: false, confirmed: false, title: 'Notice 1',  url: 'assets/notices/notice-1.jpeg'  },
  { branchId: 1, status: 'confirmed', seen: true, confirmed: true, title: 'Notice 2',  url: 'assets/notices/notice-2.jpeg' },
  { branchId: 2, status: 'pending',  seen: false, confirmed: false, title: 'Notice 3',  url: 'assets/notices/notice-3.jpeg' },
  { branchId: 2, status: 'pending',  seen: true, confirmed: false, title: 'Notice 4',  url: 'assets/notices/notice-2.jpeg' },
  { branchId: 2, status: 'pending',  seen: false, confirmed: false, title: 'Notice 3',  url: 'assets/notices/notice-3.jpeg' },
  { branchId: 2, status: 'pending',  seen: false, confirmed: false, title: 'Notice 4',  url: 'assets/notices/notice-2.jpeg' }
];

export const noticeCount = [
  {
    date: '2023-11-02',
    documents: [
      { title: 'Notice 1', url: 'assets/notices/notice-1.jpeg' },
      { title: 'Notice 2', url: 'assets/notices/notice-2.jpeg' },
      { title: 'Notice 3', url: 'assets/notices/notice-4.jpg' }
    ]
  },
  {
    date: '2023-11-03',
    documents: [
      { title: 'Notice 4', url: 'assets/notices/notice-3.jpeg' },
      { title: 'Notice 5', url: 'assets/notices/notice-1.jpeg' }
    ]
  },
  {
    date: '2023-11-04',
    documents: [
      { title: 'Notice 6', url: 'assets/notices/notice-1.jpeg' }
    ]
  }
];


