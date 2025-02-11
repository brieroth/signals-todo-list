import moment, { Moment } from "moment";

export interface TODO {
    id: number;
    title: string;
    status: boolean;
    description: string,
    dateCreated?: Moment;
    dateCompleted?: Moment;
  }