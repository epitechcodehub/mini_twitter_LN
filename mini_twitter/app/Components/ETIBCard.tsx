"use client";

import { useState } from "react";

import { Button, Card, Textarea } from "flowbite-react";
import PostType from "../Interfaces/Post";

import postMessage from "../api/postMessage";


export function ETIBCard({ content, date }: PostType) {
  const [comment, setComment] = useState("");

  function postComment() {
    const formattedDate = new Date(date).toLocaleString("en-US", {
      month: "numeric",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const toSubn = { content: comment, date: formattedDate };

    postMessage(toSubn);
  }

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(event.target.value);
  }
  return (
    <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {content}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {date}
      </p>
      <span className="flex p-2 space-x-4">
        <Textarea className="w-full" placeholder="Comment..." value={comment} onChange={handleChange}/>
        <Button onClick={postComment} className="p-2 h-14">
          Post
        </Button>
      </span>
    </Card>
  );
}
