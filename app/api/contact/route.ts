import { db } from '@/server/db'
import { contacts } from '@/server/db/schema'

export const runtime = 'edge'
export const preferredRegion = ['bom1']

export async function POST(request: Request) {
  const { name, email, message } = await request.json()
  const result = await db.insert(contacts).values({ name, email, message })
  return new Response(JSON.stringify(result), {
    status: 201,
  })
}
