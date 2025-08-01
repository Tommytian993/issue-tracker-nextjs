import { z } from "@/node_modules/zod/v4/classic/external.cjs";

export const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});
