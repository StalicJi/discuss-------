"use server";

import { redirect } from "next/navigation";

export async function search(formDate: FormData) {
  const term = formDate.get("term");

  if (typeof term !== "string" || !term) {
    redirect("/");
  }

  redirect(`/search?term=${term}`);
}
