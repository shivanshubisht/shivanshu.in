import { prisma } from '@/server/db/client'

// export const config = {
//   runtime: 'experimental-edge',
//   regions: ['bom1']
// };

export async function POST(request: Request) {
  const { name, email, message } = await request.json()
  // console.log(name, email, message)
  const contact = await prisma.contact.create({
    data: {
      name,
      email,
      message,
    },
  })
  return new Response(JSON.stringify(contact), {
    status: 201,
  })
}
