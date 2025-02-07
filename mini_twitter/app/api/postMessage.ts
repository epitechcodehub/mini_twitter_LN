"use server";

import client from "@/lib/db";
import PostType from "../Interfaces/Post";

const postMessage = async (postType: PostType) => {
    try {
        const db = client.db("database");
        const collection = db.collection("messages");
        const result = await collection.insertOne({ message: postType });
        return 0;
    } catch (e) {
        console.log(e);
        return 404;
    }
}

export default postMessage;
