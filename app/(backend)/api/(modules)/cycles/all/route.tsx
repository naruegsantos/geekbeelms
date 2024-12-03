import { NextResponse } from 'next/server'
import { SELECTALL } from '../services'

export async function GET() {
	const data = await SELECTALL()
	return NextResponse.json(data)
}
