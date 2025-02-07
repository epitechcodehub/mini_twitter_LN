import { ObjectId } from "mongodb";

export default interface PostType {
    content: string;
    date: string;
}

export interface PostThreadType {
    idMessage: ObjectId;
    content: string;
    date: string;
}
