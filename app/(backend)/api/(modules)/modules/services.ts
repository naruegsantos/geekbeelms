import { supabase } from "@/app/lib/db"
import { IModule } from "./types"

export async function SELECT():Promise<IModule[] | null> {
	const { data: data, error } = await supabase
	.from('modules')
	.select('*')
		
	if(error) console.log(error);

	return data
}