import { NextResponse, type NextRequest } from 'next/server'

const PUBLIC_ROUTES = new Set([
    '/api/auth/login',
    '/api/auth/register'
])

const ALLOWED_API_ROUTES = new Set([
    '/auth/login',
    '/auth/register',
])

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const session = request.cookies.get('auth_token')?.value

    if (ALLOWED_API_ROUTES.has(pathname)) {
        return NextResponse.next()
    }

    if (pathname.startsWith('/api')) {
        if (!session) {
            return new NextResponse('Unauthorized', { status: 401 })
        }
        return NextResponse.next()
    }

    const isPublicRoute = PUBLIC_ROUTES.has(pathname)

    if (!session && !isPublicRoute) {
        const loginUrl = new URL('/api/login', request.url)
        return NextResponse.redirect(loginUrl)
    }

    if (session && isPublicRoute) {
        const redirectUrl = pathname === '/api/login'
            ? new URL('/', request.url)
            : new URL('/profile', request.url)

        return NextResponse.redirect(redirectUrl)
    }

    const response = NextResponse.next()
    response.headers.set('x-middleware-cache', 'no-cache')

    return response
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
