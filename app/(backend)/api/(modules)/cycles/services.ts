'use-server'

import { supabase } from "@/app/lib/db"
import { ICycle, IFullCycle } from "./types"

export async function SELECT():Promise<ICycle[] | null> {
    const { data: data, error } = await supabase
	.from('cycles')
	.select('*')
    
    if(error) console.log(error);
	
    return data
}

export async function SELECTALL():Promise<IFullCycle[] | null> {
    const { data: data, error } = await supabase
	.from('cycles')
	.select(`
        id,
        name,
        modules (
            id,
            name,
            module_cycle,
            steps (*)
        )
    `)
    if(error) console.log(error);

    return data
}