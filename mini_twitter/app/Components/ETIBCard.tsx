"use client";

import { Button, Card } from "flowbite-react";
import PostType from "../Interfaces/Post";

export function ETIBCard({ content, date }: PostType) {
  return (
    <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {content}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {date}
      </p>
    </Card>
  );
}
