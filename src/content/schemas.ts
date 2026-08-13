import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "brand": z.object({
        "alt": z.string()
      }),
      "greetings": z.array(z.object({
        "headline": z.string(),
        "body": z.string(),
        "id": z.string()
      })),
      "button": z.string(),
      "footer": z.string(),
      "detail": z.string()
    })
  }
};
export type Schemas = typeof schemas;