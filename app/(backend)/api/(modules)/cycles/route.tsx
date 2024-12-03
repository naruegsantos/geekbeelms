import { NextResponse } from 'next/server'
import { SELECT } from './services'

export async function GET() {
	const data = await SELECT()
	return NextResponse.json(data)
}
