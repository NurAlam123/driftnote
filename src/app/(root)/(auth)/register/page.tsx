"use client";

import { register } from "@/actions/register";
import Logo from "@/components/logo";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, LogInIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { registerSchema, RegisterSchemaType } from "@/lib/zod/register-schema";
import { createGhost } from "@/actions/createGhost";
import { useAuthStore } from "@/store/auth-store";
import { toast } from "sonner";
import { redirect } from "next/navigation";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const url = new URL(window.location.href);
  const query = url.searchParams;

  const setGhost = useAuthStore((state) => state.setGhost);

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: RegisterSchemaType) {
    setLoading(true);
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);

    const { data, error } = await createGhost({
      email: values.email as string,
      username: values.username,
    });

    if (error) {
      toast.error(error);
      setLoading(false);
      return;
    }

    if (!data) {
      setLoading(false);
      return;
    }

    const redirectURL = query.get("redirect") || "/";

    const { error: registerError } = await register(formData, redirectURL);

    if (registerError) {
      toast.error(error);
      setLoading(false);
      return;
    }

    setGhost(data);
    setLoading(false);
    redirect(redirectURL);
  }

  return (
    <div className="flex justify-center items-center h-svh mx-2 md:mx-0">
      <div className="max-w-sm w-full border px-6 py-12 rounded-md shadow-md">
        <div className="flex justify-center my-8">
          <Logo />
        </div>
        <div className="flex-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>username</FormLabel>
                    <FormControl>
                      <Input required placeholder="ghost_rider" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>email</FormLabel>
                    <FormControl>
                      <Input
                        required
                        placeholder="ghost_rider@ghost.com"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>password</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          placeholder="••••••"
                          required
                          {...field}
                          type={showPassword ? "text" : "password"}
                        />
                      </FormControl>
                      <button
                        type="button"
                        className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-neutral-600 dark:text-neutral-400"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {!showPassword ? <Eye /> : <EyeOff />}
                      </button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div>
                      <div className="loader w-2" />
                    </div>
                  </div>
                ) : (
                  <>
                    <span>Register</span> <LogInIcon />
                  </>
                )}
              </Button>

              <div>
                <p className="text-sm">
                  <span className="text-neutral-600 dark:text-neutral-400">
                    Already have an account?{" "}
                  </span>
                  <Link
                    href="/login"
                    className="underline hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors duration-150"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
