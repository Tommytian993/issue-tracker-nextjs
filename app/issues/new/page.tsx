"use client";
import { useForm, Controller } from "react-hook-form";
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
  const { register, control } = useForm<IssueForm>();

  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Root placeholder="Title" {...register("title")} />
      </TextField.Root>
      <Controller
        control={control}
        name="description"
        render={({ field }) => (
          <SimpleMdeReact placeholder="Description" {...field} />
        )}
      />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
