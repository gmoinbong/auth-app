import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
    (await cookies()).set({
        name: 'auth_token',
        value: '',
        expires: new Date(0), 
        path: '/',
    })

    return NextResponse.json({ success: true })
}