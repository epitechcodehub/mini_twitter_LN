import client from "@/lib/db";

const postMessage = (postType: ) => {
    try {
        const db = client.db("Cluster0");
        const collection = db.collection("messages");
        const result = collection.insertOne({ message: postType });
        return result;
    } catch (e) {
        console.log(e);
        return 404;
    }
}

export default postMessage;
