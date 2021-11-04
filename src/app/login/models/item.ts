import { FormControl } from '@ngneat/reactive-forms';

export class Item {
  title?: string;
  description?: string;
  startDate: string;
  endDate: string;
  levelOfImportance?: IMPORTANCE;
  recurrency?: RequrencyDetails;
  isDone?: TASK_STATE;
  id?: number;
  constructor() {
    this.startDate = new Date().toString();
    this.endDate = new Date().toString();
  }
}

export class ItemModel {
  title?: string;
  description?: string;
  startDate?: FormControl<Date>;
  endDate?: FormControl<Date>;
  levelOfImportance?: IMPORTANCE;
  recurrency?: FormControl<RECURENCY_TYPE>;
  isDone?: FormControl<TASK_STATE>;
  id?: number;
}

export class RequrencyDetailsModel {
  isRecurrent?: boolean;
  type?: FormControl<RECURENCY_TYPE>;
}
export class RequrencyDetails {
  isRecurrent?: boolean;
  type?: RECURENCY_TYPE;
}
export enum IMPORTANCE {
  LOW = 0,
  MEDIUM = 1,
  ASAP = 2,
  EMERGENCY = 3,
}

export enum RECURENCY_TYPE {
  DAILY = 0,
  WEEKLY = 1,
  MONTHLY = 2,
}

export enum TASK_STATE {
  DONE = 1,
  NOT_DONE = 2,
}

export const recurrencyTypes = [
  { title: 'Daily', key: '0' },
  { title: 'Weekly', key: '1' },
  { title: 'Monthly', key: '2' },
];
export const importanceTypes = [
  {
    title: 'Low',
    key: '0',
  },
  { title: 'Medium', key: 1 },
  { title: 'ASAP', key: 2 },
  { title: 'Emergency', key: 3 },
];
