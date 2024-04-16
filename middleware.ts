import { NextResponse } from 'next/server'

export function middleware() {
  return NextResponse.redirect('https://meet.google.com/tvq-wygq-zpn')
}

export const config = {
  matcher: ['/meet'],
}
