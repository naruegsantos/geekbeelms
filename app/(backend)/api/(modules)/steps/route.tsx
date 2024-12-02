import { NextRequest, NextResponse } from 'next/server'
import { supabase } from "@/app/lib/db"
import { SELECT } from './services'

export async function GET() {
	const data = await SELECT()
	return NextResponse.json(data)
}