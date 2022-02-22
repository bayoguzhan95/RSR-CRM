import { FaAtlassian, FaAmilia, FaUserTie, FaBuilding, FaPlaneDeparture, FaTruckMoving } from 'react-icons/fa';
import { IoLogoUsd, IoDocumentTextSharp } from 'react-icons/io5';
import { GiBoxUnpacking, GiCheckMark } from 'react-icons/gi';
import { FcSettings } from 'react-icons/fc';
import { AiFillAppstore } from 'react-icons/ai';
import React from 'react';
// ColorFul-Icon
// import { FcShipped, FcDepartment, FcDocument, FcBusinessman } from "react-icons/fc";

export const sidebarItems = [
  {
    id: 1,
    title: 'Orders',
    icon: <AiFillAppstore size={17} className="text-gray-300" />,

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
    icon: <FaAtlassian size={17} className="text-gray-300" />,
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
    icon: <IoLogoUsd size={17} className="text-gray-300" />,
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
    icon: <FaAmilia size={17} className="text-gray-300" />,

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
    icon: <FaTruckMoving size={17} className="text-gray-300" />,
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
    id: 6,
    title: 'Companies',
    icon: <FaBuilding size={17} className="text-gray-300" />,

    subNav: [
      {
        title: 'Suppliers',
        to: '/companies/suppliers',
      },
      {
        title: 'Clients',
        to: '/companies/clients',
      },
      {
        title: 'Exporters',
        to: '/companies/exporters',
      },
    ],
  },
  {
    id: 7,
    title: 'Reports',
    icon: <IoDocumentTextSharp size={17} className="text-gray-300" />,

    subNav: [
      {
        title: 'Delivery Reports',
        to: '/reports/delivery-reports',
      },
    ],
  },
  {
    id: 8,
    title: 'Packing',
    icon: <GiBoxUnpacking size={17} className="text-gray-300" />,

    subNav: [
      {
        title: 'Packing',
        to: '/packing/packing',
      },
    ],
  },
  {
    id: 9,
    title: 'Quality',
    icon: <GiCheckMark size={17} className="text-gray-300" />,

    subNav: [
      {
        title: 'Quality',
        to: '/quality/quality',
      },
    ],
  },
  {
    id: 10,
    title: 'Employees',
    icon: <FaUserTie size={17} className="text-gray-300" />,
    subNav: [
      {
        title: 'Employees',
        to: '/employees',
      },
    ],
  },
  {
    id: 11,
    title: 'Settings',
    icon: <FcSettings size={17} className="text-gray-300" />,

    subNav: [
      {
        title: 'Descriptions',
        to: '/settings/descriptions',
      },
      {
        title: 'Box Settings',
        to: '/settings/box-settings',
      },
      {
        title: 'General Settings',
        to: '/settings/general-settings',
      },
    ],
  },
  {
    id: 12,
    title: 'Shipment Plan',
    icon: <FaPlaneDeparture size={17} className="text-gray-300" />,

    subNav: [
      {
        title: 'Create Shipment Plan',
        to: '/shipment-plan/create-shipment-plan',
      },
      {
        title: 'Pending Shipment Plan ',
        to: '/shipment-plan/pending-shipment-plan',
      },
      {
        title: 'Final Shipment Plan',
        to: '/shipment-plan/final-shipment-plan',
      },
    ],
  },
];

export const userDepartment = [
  { label: 'Management', value: 1 },
  { label: 'Traffic', value: 2 },
  { label: 'Merchandiser', value: 3 },
  { label: 'Fit', value: 4 },
  { label: 'Fit Assistant', value: 5 },
  { label: 'Collection', value: 6 },
  { label: 'Quality control', value: 7 },
  { label: 'Qc Manager', value: 8 },
  { label: 'Division Manager', value: 9 },
];

export const userStatus = [
  { value: 1, label: 'Employee' },
  { value: 2, label: 'Department Manager' },
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
  {
    id: 1123123,
    name: 'oguzhan',
    surname: 'bay',
    email: 'test@gmail.com',
    status: 'deneme',
    role: 'Admin',
    department: 'Office',
  },
];

export const paymentTerm = [
  { label: 'BANK DRAFT 60 DAYS', value: 1 },
  { label: 'BANK DRAFt 90 DAYS', value: 2 },
  { label: 'CAD', value: 3 },
  { label: 'CAG AT 30 DAYS', value: 4 },
  { label: 'CAG AT 45 DAYS', value: 5 },
  { label: 'CAG AT 90 DAYS', value: 6 },
  { label: 'COD', value: 7 },
  { label: 'DA 30 DAYS', value: 8 },
  { label: 'LC 45 DAYS', value: 9 },
  { label: 'LC AT 60  ', value: 10 },
  { label: 'LC AT 90 DAYS', value: 11 },
  { label: 'LC AT SIGHT', value: 12 },
];

export const currency = [
  { label: 'TL', value: 1 },
  { label: '€', value: 2 },
  { label: '$', value: 3 },
  { label: '£', value: 4 },
];

export const shipment = [
  { label: 'SHIPMENT', value: 1 },
  { label: 'AIR', value: 2 },
  { label: 'DHL', value: 3 },
  { label: 'TNT', value: 4 },
  { label: 'TRUCK', value: 5 },
  { label: 'UPS', value: 6 },
  { label: 'VESSEl', value: 7 },
  { label: 'YURTİÇİ KARGO', value: 8 },
];

export const certificate = [
  { label: 'GOTS', value: 1 },
  { label: 'OCS', value: 2 },
  { label: 'RCS', value: 3 },
  { label: 'GRS', value: 4 },
  { label: 'BCI', value: 5 },
];

export const clients = [
  { label: 'GOTS', value: 1 },
  { label: 'OCS', value: 2 },
  { label: 'RCS', value: 3 },
  { label: 'GRS', value: 4 },
  { label: 'BCI', value: 5 },
];

export const seasons = [
  { label: 'GOTS', value: 1 },
  { label: 'OCS', value: 2 },
  { label: 'RCS', value: 3 },
  { label: 'GRS', value: 4 },
  { label: 'BCI', value: 5 },
];

export const departments = [
  { label: 'GOTS', value: 1 },
  { label: 'OCS', value: 2 },
  { label: 'RCS', value: 3 },
  { label: 'GRS', value: 4 },
  { label: 'BCI', value: 5 },
];

export const fabriccode = [
  { label: 'GOTS', value: 1 },
  { label: 'OCS', value: 2 },
  { label: 'RCS', value: 3 },
  { label: 'GRS', value: 4 },
  { label: 'BCI', value: 5 },
];
