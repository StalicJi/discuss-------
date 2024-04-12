"use client";

import { useFormState } from "react-dom";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Divider,
} from "@nextui-org/react";
import * as actions from "@/actions";
import FormButton from "../common/form-button";

export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {},
  });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">提問</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">寫下你的問題</h3>
            <Divider />
            <Input
              name="name"
              label="使用者名稱"
              labelPlacement="outside"
              placeholder="名字"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join("， ")}
            />
            <Textarea
              name="description"
              label="提問內容"
              labelPlacement="outside"
              placeholder="寫下你的提問內容"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join("， ")}
            />
            {formState.errors._form ? (
              <div className="p-2 bg-red-200 border border-red-400 rounded">
                {formState.errors._form?.join("， ")}
              </div>
            ) : null}
            <FormButton color="secondary">發怖</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
