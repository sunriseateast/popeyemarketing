import {z} from 'zod';

export const mySchmea=z.object({
    name:z.string()
    .nonempty("* Name cannot be empty")
    .min(3,"* Minimum 3 characters required")
    .regex(/^[a-zA-Z ]+$/, "* Only letters allowed"),
    number:z.string()
    .nonempty("* Number cannot be empty")
    .regex(/^\d{7,15}$/, "* Must be 7 to 15 digits (numbers allowed)")

})