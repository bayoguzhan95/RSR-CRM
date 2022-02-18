export const sidebarItems = [
  {
    id: 1,
    title: 'Orders',

    subNav: [
      {
        title: 'Create PO',
        to: '/orders/create-po',
      },
      {
        title: 'Pending Orders',
        to: '/orders/pending-orders',
      },
      {
        title: 'Orders In Process',
        to: '/orders/orders-in-process',
      },
      {
        title: 'Shipped Orders',
        to: '/orders/shipped-orders',
      },
      {
        title: 'Delete Orders',
        to: '/orders/delete-orders',
      },
    ],
  },
  {
    id: 2,
    title: 'Quote Sheet',
    subNav: [
      {
        title: 'Create Quote Sheet',
        to: '/quote-sheet/create-quote-sheet',
      },
      {
        title: 'Current Quote Sheet ',
        to: '/quote-sheet/current-quote-sheet',
      },
      {
        title: 'EX Quote Sheet',
        to: '/quote-sheet/ex-quote-sheet',
      },
      {
        title: 'Report',
        to: '/quote-sheet/report',
      },
    ],
  },
  {
    id: 3,
    title: 'Finance',
    subNav: [
      {
        title: 'General Look',
        to: '/finance/general-look',
      },
      {
        title: 'Create Proforma ',
        to: '/finance/create-proforma',
      },
      {
        title: 'Comission Details',
        to: '/finance/commission-details',
      },
      {
        title: 'Proformo List',
        to: '/finance/proforma-list',
      },
      {
        title: 'Monthly Inv',
        to: '/finance/monthly-inv',
      },

      {
        title: 'Bank Account',
        to: '/finance/bank-account',
      },

      {
        title: 'Reports',
        to: '/finance/reports',
      },
    ],
  },
  {
    id: 4,
    title: 'Proformas',
    subNav: [
      {
        title: 'Supplier Proforma',
        to: '/proformas/supplier-proforma',
      },
    ],
  },
  {
    id: 5,
    title: 'Traffic',
    subNav: [
      {
        title: 'Create Packing',
        to: '/traffic/create-packing',
      },
      {
        title: 'Pending Packing List',
        to: '/traffic/pending-packing-list',
      },
      {
        title: 'Complete Packing List',
        to: '/traffic/complete-packing-list',
      },
      {
        title: 'Create Invoice',
        to: '/traffic/create-invoice',
      },
      {
        title: 'Invoice List',
        to: '/traffic/invoice-list',
      },
    ],
  },
  {
    id: 10,
    title: 'Employees',
    subNav: [
      {
        title: 'Employees',
        to: '/employees',
      },
    ],
  },
];

export const userDepartment = [
  { departman: '1. Departman', id: 1 },
  { departman: '2. Departman', id: 2 },
  { departman: '3. Departman', id: 3 },
];

export const employeeAuths = [
  {
    id: 1,
    menuItemToHookForm: 'orders',
    menuItem: 'Orders',
    subMenu: [
      { item: 'Create PO', value: 'createpo' },
      { item: 'Pending Orders', value: 'pendingorders' },
      { item: 'Orders In Process', value: 'ordersinprocess' },
      { item: 'Shipped Orders', value: 'shippedorders' },
      { item: 'Delete Orders', value: 'deleteorders' },
    ],
  },
  {
    id: 2,
    menuItemToHookForm: 'quotesheet',
    menuItem: 'Quote Sheet',
    subMenu: [
      { item: 'Create Quote Sheet', value: 'createquotesheet' },
      { item: 'Current Quote Sheet', value: 'currentquotesheet' },
      { item: 'Ex Quote Sheet', value: 'exquotesheet' },
      { item: 'Report', value: 'report' },
    ],
  },
  {
    id: 3,
    menuItemToHookForm: 'finance',
    menuItem: 'Finance',
    subMenu: [
      { item: 'General Look', value: 'generallook' },
      { item: 'Create Proforma', value: 'createproforma' },
      { item: 'Commission Details', value: 'commissiondetails' },
      { item: 'Proforma List', value: 'proformalist' },
      { item: 'Monthly Inv', value: 'monthlyinv' },
      { item: 'Bank Account', value: 'bankaccount' },
      { item: 'Reports', value: 'reports' },
    ],
  },
  {
    id: 4,
    menuItemToHookForm: 'proformas',
    menuItem: 'Proformas',
    subMenu: [{ item: 'Supplier Proforma', value: 'supplierproforma' }],
  },
  {
    id: 5,
    menuItemToHookForm: 'traffic',
    menuItem: 'Traffic',
    subMenu: [
      { item: 'Create Packing', value: 'createpacking' },
      { item: 'Pending Packing List', value: 'pendingpackinglist' },
      { item: 'Complete Packing List', value: 'completepackinglist' },
      { item: 'Create Invoice', value: 'createinvoice' },
      { item: 'Invoice List', value: 'invoicelist' },
    ],
  },
  {
    id: 5,
    menuItemToHookForm: 'employees',
    menuItem: 'Employees',
    subMenu: [{ item: 'Employees', value: 'employees' }],
  },
];

export const mockUserData = [
  { id: 231231, name: 'oguzhan', surname: 'bay', email: 'test@gmail.com', status: 'deneme', role: 'Admin', department: 'Office' },
  { id: 112312, name: 'oguzhan', surname: 'bay', email: 'test@gmail.com', status: 'deneme', role: 'Admin', department: 'Office' },
  { id: 1123123, name: 'oguzhan', surname: 'bay', email: 'test@gmail.com', status: 'deneme', role: 'Admin', department: 'Office' },
];
