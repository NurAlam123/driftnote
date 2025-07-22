"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";

export async function register(formData: FormData, redirectURL: string) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error, data: userData } = await supabase.auth.signUp(data);

  if (error) {
    let errorMessage;

    if (error.code === "user_already_exists") {
      errorMessage = "User Already Exist. Try to login";
    } else if (error.code === "weak_password") {
      errorMessage = "Password is weak";
    }

    return {
      success: false,
      error: errorMessage,
    };
  }

  revalidatePath(redirectURL, "page");
  return {
    success: true,
    user: userData.user,
  };
}
