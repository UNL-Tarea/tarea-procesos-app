import { z } from 'zod';

export const FormSchema = z.object({
  title: z.string().min(1, {
    message: 'El titulo es requerido.',
  }),
  description: z.string().min(1, {
    message: 'La descripción es requerida.',
  }),
  dateTask: z.date(),
});

export type FormType = z.infer<typeof FormSchema>;
