"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

interface FormButtonProps {
  children: React.ReactNode;
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
}

export default function FormButton({ children, color }: FormButtonProps) {
  const status = useFormStatus();

  return (
    <Button type="submit" isLoading={status.pending} color={color}>
      {children}
    </Button>
  );
}
