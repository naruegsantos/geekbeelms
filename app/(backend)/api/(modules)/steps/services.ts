'use-server'

import { supabase } from "@/app/lib/db"
import { IStep } from "./types"

export async function SELECT():Promise<IStep[] | null> {
	const { data: data, error } = await supabase
	.from('steps')
	.select('*')
	
	if(error) console.log(error);

	return data
}