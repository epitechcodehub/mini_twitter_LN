"use server";

import client from "@/lib/db";
import { ObjectId } from "mongodb";

const getMessages = async () => {
    try {
        const db = client.db("database");
        const collection = db.collection("messages");
        const result = await collection.find().toArray();
        return JSON.parse(JSON.stringify(result));
    } catch (e) {
        console.log(e);
        return 404;
    }
}

const getMessage = async (id: string) => {
    try {
        const db = client.db("database");
        const collection = db.collection("messages");
        const result = await collection.findOne({ _id: new ObjectId(id) });
        return JSON.parse(JSON.stringify(result));
    } catch (e) {
        console.log(e);
        return 404;
    }
}

export { getMessages, getMessage };
