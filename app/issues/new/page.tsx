"use client";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@radix-ui/themes";
import React from "react";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

// this is the type of the form data
interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register } = useForm<IssueForm>();
  console.log(register("title"));

  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMdeReact placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
