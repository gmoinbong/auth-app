import { NextResponse, type NextRequest } from 'next/server'

const PUBLIC_PAGE_ROUTES = new Set([
    '/login',
    '/register'
])

const ALLOWED_API_ROUTES = new Set([
    '/api/login',
    '/api/register'
])

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const session = request.cookies.get('auth_token')?.value

    if (pathname.startsWith('/_next') || pathname === '/favicon.ico') {
        return NextResponse.next()
    }

    if (pathname.startsWith('/api')) {
        if (ALLOWED_API_ROUTES.has(pathname)) {
            return NextResponse.next()
        }

        if (!session) {
            return new NextResponse('Unauthorized', { status: 401 })
        }

        return NextResponse.next()
    }

    const isPublicPage = PUBLIC_PAGE_ROUTES.has(pathname)

    if (!session && !isPublicPage) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if (session && isPublicPage) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    const response = NextResponse.next()
    response.headers.set('x-middleware-cache', 'no-cache')

    return response
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}