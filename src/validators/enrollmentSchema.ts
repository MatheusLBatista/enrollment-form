import { z } from 'zod';

export const EnrollmentSchema = z.object({
    name: z
        .string()
        .min(2, "Nome inválido.")
        .nonempty("Campo nome é obrigatório."),
    email: z
        .string()
        .email("Formato de email inválido.")
        .min(4, "Email inválido.")
        .nonempty("Campo email é obrigatório."),
    gender: z
        .string()
        .refine((val) => val === 'male' || val === 'female',
            { message: "Campo sexo é obrigatório." }
        ),
    description: z
        .string()
        .optional(),
    terms: z
        .boolean()
        .refine(val => val === true, {
            message: "Os termos de serviços devem ser aceitos."
        })
})