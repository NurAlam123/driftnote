import z from "zod";

export const registerSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),

  email: z.email({
    message: "Invalid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 3 characters.",
  }),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;
