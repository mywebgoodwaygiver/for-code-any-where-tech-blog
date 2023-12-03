import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

// export const runtime = 'edge'; // Add this line to specify the runtime

export async function GET(request: NextRequest) {
    // const secret = request.nextUrl.searchParams.get('secret')

 

    // const path = request.nextUrl.searchParams.get('path') || '/'

    // revalidatePath(path)

    return NextResponse.json({data:""})
}