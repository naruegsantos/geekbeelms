'use-server'

import { supabase } from "@/app/lib/db"
import { IUser } from "./types"

export async function SELECT():Promise<IUser[] | null> {
	const { data: data, error } = await supabase
	.from('users')
	.select('*')
	
	if(error) console.log(error);

	return data
}