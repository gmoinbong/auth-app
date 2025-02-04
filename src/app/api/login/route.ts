import { AuthService } from "@/features/auth/api/auth-api";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const credentials = await req.json();
        const result = await AuthService.login(credentials);

        if (result.error) {
            return NextResponse.json({ message: result.error }, { status: 401 });
        }

        const response = new NextResponse(JSON.stringify({ success: true }), {
            status: 200,
            headers: {
                'Set-Cookie': `auth_token=${result.data?.accessToken}; Path=/; HttpOnly; Secure=${process.env.NODE_ENV === 'production'}; SameSite=Lax; Max-Age=604800`,
                'Content-Type': 'application/json',
            },
        });

        return response;
    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}