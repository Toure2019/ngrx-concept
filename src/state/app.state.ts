import { Detail } from "src/models/detail";

export interface State {
    count: number;
    title: string;
    details: Detail[];
}