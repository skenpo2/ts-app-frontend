import { z } from 'zod';

// schemas
const nameSchema = z
  .string()
  .trim()
  .min(2, { message: 'Name must be 2 or more characters long' });
const emailSchema = z.string().email().trim().toLowerCase();
const passwordSchema = z
  .string()
  .min(6, 'Password must be at least 8 characters');
const confirmPasswordSchema = passwordSchema;

// login form schema
export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type TLoginSchema = z.infer<typeof loginSchema>;

// sign up form schema
export const signUpSchema = loginSchema
  .extend({
    name: nameSchema,
    confirmPassword: confirmPasswordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;
