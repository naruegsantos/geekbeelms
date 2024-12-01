import { NextRequest, NextResponse } from 'next/server'
import { client } from "@/app/lib/db"

export async function GET() {
	const data = (await client.from("cycles").select("*")).data
	console.log(data);
	
	
	return NextResponse.json(data)
}