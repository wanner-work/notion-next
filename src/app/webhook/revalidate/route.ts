import {revalidatePath} from 'next/cache'
import {NextRequest} from 'next/server'

export async function GET(request: NextRequest) {
  revalidatePath('/webhook')
  return Response.redirect(`https://notion-next.wanner.work/webhook`)
}

export async function POST(request: NextRequest) {
  revalidatePath('/webhook')
  return Response.json({
    revalidated: true,
    now: Date.now(),
    message: 'successfully revalidated page'
  })
}
