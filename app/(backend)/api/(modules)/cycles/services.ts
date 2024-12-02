'use-server'

import { supabase } from "@/app/lib/db"
import { ICycle } from "./types"

export async function SELECT():Promise<ICycle[] | null> {
    const { data: data, error } = await supabase
	.from('cycles')
	.select('*')
	error? console.log(error) : null

    return data

}