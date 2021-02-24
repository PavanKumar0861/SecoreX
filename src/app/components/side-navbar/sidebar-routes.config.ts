export const ROUTES = [
   
    { path: '#component', id: 'component', title: 'ID Card Admin', icon: 'apps', children: [
      { path: 'dashboard', title: 'Dashboard', icon: '', children: null },
      {path: 'id-card-approval', title: 'Id Card Approval', icon: 'IC'},
      {path: 'dispatch', title: 'Card Dispatch', icon: 'CD',children: [
        { path: 'dispatch', title: 'Dispatch', icon: '', children: null },
        {path: '/', title: 'Dispatched Cards', icon: 'IC'}
      ]},
      {path: 'card-issue', title: 'Card Issue', icon: 'CI'},
      {path: 'components/wizard', title: 'Payroll Deduction', icon: 'PD'},
      {path: 'components/wizard', title: 'Inbox', icon: 'I'},
      {path: 'components/wizard', title: 'Reports', icon: 'R'},
    ]},
    { path: '#print', id: 'print', title: 'Printing Queue', icon: 'apps', children: [
      { path: "print-status",  title: 'Print Status', icon: 'CI'},
      { path: "print-pipeline",title: 'Print Pipeline', icon: 'PD'},
      { path: "completed-queue",title: 'Completed Queue', icon: 'PD'},
    ]},

    { path: '/odc-admin', title: 'Print Admin', icon: 'dashboard', children: null },
    { path: '/odc-admin', title: 'ODC Admin', icon: 'dashboard', children: null },
    { path: '/odc-admin', title: 'Super Admin', icon: 'dashboard', children: null },
    { path: '/odc-admin', title: 'Settings', icon: 'dashboard', children: null },
    { path: '/odc-admin', title: 'Logout', icon: 'dashboard', children: null },



   
];
