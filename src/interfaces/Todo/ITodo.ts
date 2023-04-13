export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  status: EStatus;
  completion_date: string;
}

export enum EStatus {
  TODO = "Todo",
  PENDING = "Pending",
  DONE = "Done",
}
