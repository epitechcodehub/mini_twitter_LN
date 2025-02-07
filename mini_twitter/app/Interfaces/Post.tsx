import { ObjectId } from "mongodb";

export default interface PostType {
    content: string;
    date: Date;
}

export interface PostThreadType {
    idMessage: ObjectId;
    content: string;
    date: Date;
}
