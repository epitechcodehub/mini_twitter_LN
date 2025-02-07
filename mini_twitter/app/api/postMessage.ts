import client from "@/lib/db";
import PostType from "../Interfaces/Post";

const postMessage = (postType: PostType) => {
    try {
        const db = client.db("database");
        const collection = db.collection("messages");
        const result = collection.insertOne({ message: postType });
        return result;
    } catch (e) {
        console.log(e);
        return 404;
    }
}

export default postMessage;
