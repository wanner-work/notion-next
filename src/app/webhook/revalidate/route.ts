import {revalidatePath} from 'next/cache'

export async function GET(request: Request) {
  revalidatePath('/webhook')
  return Response.json({
    done: true
  })
}
