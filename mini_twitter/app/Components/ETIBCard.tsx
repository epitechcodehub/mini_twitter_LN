"use client";

import { useState } from "react";

import { Button, Card, Textarea } from "flowbite-react";
import PostType, { PostThreadType } from "../Interfaces/Post";

import postThread from "../api/postThread";

interface CardProps {
  content: string;
  date: Date;
  threads: PostThreadType[];
  id: string;
}

function Thread({ content, date }: PostThreadType) {
  return (
    <Card className="max-w-sm">
      <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        {content}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {date.toLocaleDateString()}
      </p>
    </Card>
  );
}

export function ETIBCard({ content, date, threads, id }: CardProps) {
  const [comment, setComment] = useState("");

  function postComment() {
    const formattedDate = new Date(date);
    const toSubn = { content: comment, date: formattedDate };

    postThread(toSubn, id);
    setComment("");
    window.location.reload();
  }

  console.log(threads);

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(event.target.value);
  }
  return (
    <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {content}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {date.toLocaleDateString()}
      </p>
      {
        threads.map((thread: PostThreadType, index: number) => {
          return <Thread key={index} content={thread.content} date={thread.date} />;
        })
      }
      <span className="flex p-2 space-x-4">
        <Textarea className="w-full" placeholder="Comment..." value={comment} onChange={handleChange}/>
        <Button onClick={postComment} className="p-2 h-14">
          Comment
        </Button>
      </span>
    </Card>
  );
}
