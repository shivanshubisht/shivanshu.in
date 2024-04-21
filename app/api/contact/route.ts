import { db } from "@/server/db";
import { contacts } from "@/server/db/schema";
import { z } from "zod";

export const runtime = "edge";
export const preferredRegion = ["bom1"];

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export async function POST(request: Request) {
  const data = await request.json();
  const { name, email, message } = contactSchema.parse(data);
  const startTime = Date.now();
  const result = await db.insert(contacts).values({ name, email, message });
  const endTime = Date.now();
  return new Response(JSON.stringify(result), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
      "X-Response-Time": `${endTime - startTime}ms`,
    },
  });
}
