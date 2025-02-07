"use server"

import client from "@/lib/db";
import PostType, { PostThreadType } from "../Interfaces/Post";
import { Collection, ObjectId } from "mongodb";

const postThread = async (thread: PostThreadType, id: string) => {
    try {
        const db = client.db("database");
        const collection: Collection<PostType> = db.collection("messages");
        const result = await collection.updateOne({ _id: new ObjectId(id) }, { $push: { postThread: thread } });
        console.log(result);
        return 0;
    } catch (e) {
        console.log(e);
        return 404;
    }
}

export default postThread;
