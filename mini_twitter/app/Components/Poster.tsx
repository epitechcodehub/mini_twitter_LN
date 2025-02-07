"use client";

import { useState } from "react";

import { Button, Card, Textarea } from "flowbite-react";
import PostType from "../Interfaces/Post";

import postMessage from "../api/postMessage";


export function Poster() {
  const [comment, setComment] = useState("");

  function postComment() {
    const formattedDate = new Date();
    const toSubn = { content: comment, date: formattedDate, threads: [] };

    postMessage(toSubn);
    setComment("");
    window.location.reload();
  }

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(event.target.value);
  }
  return (
      <div className="flex p-2 space-x-4">
        <Textarea className="w-full" placeholder="Post something..." value={comment} onChange={handleChange}/>
        <Button onClick={postComment} className="p-2 h-14">
          Post
        </Button>
      </div>
  );
}
