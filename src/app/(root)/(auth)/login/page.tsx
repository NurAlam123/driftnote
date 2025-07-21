"use client";

import { login } from "@/actions/login";
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
import { loginSchema, LoginSchemaType } from "@/lib/zod/login-schema";
import { Eye, EyeOff, LogInIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { getGhost } from "@/actions/getGhost";
import { toast } from "sonner";
import { useAuthStore } from "@/store/auth-store";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const setGhost = useAuthStore((state) => state.setGhost);

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginSchemaType) {
    setLoading(true);
    const formData = new FormData();
    formData.append("password", values.password);

    const { data, error: ghostError } = await getGhost({
      username: values.username,
    });
    if (!data || ghostError) {
      toast.error(ghostError);
      setLoading(false);
      return;
    }

    const email = data.email;
    formData.append("email", email);
    const { error } = await login(formData);
    if (error) {
      toast.error(error);
      setLoading(false);
      return;
    }

    setLoading(false);
    setGhost(data);
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

              <Button type="submit" className="w-full">
                {loading ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div>
                      <div className="loader w-2" />
                    </div>
                  </div>
                ) : (
                  <>
                    <span>Login</span> <LogInIcon />
                  </>
                )}
              </Button>

              <div>
                <p className="text-sm">
                  <span className="text-neutral-600 dark:text-neutral-400">
                    Don&apos;t have an account?{" "}
                  </span>
                  <Link
                    href="/register"
                    className="underline hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors duration-150"
                  >
                    Register
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
