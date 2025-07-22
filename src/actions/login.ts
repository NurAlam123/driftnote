"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";

export async function login(formData: FormData, redirectURL: string) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    if (error.status === 400) {
      return {
        success: false,
        error: "Invalid username/password",
      };
    }
  }

  revalidatePath(redirectURL, "page");
  return {
    success: true,
    error: null,
  };
}
