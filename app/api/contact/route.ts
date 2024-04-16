import { prisma } from '@/server/db/client'

// export const config = {
//   runtime: 'edge',
//   regions: ['bom1'],
// }

export async function POST(request: Request) {
  const { name, email, message } = await request.json()
  const contact = await prisma.contact.create({
    data: {
      name,
      email,
      message,
    },
  })
  console.log(contact)
  return new Response(JSON.stringify(contact), {
    status: 201,
  })
}
