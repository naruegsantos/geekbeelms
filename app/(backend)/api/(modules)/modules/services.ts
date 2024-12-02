import { supabase } from "@/app/lib/db"
import { IModule } from "./types"
import { PostgrestError } from "@supabase/supabase-js";

export async function SELECT():Promise<IModule[] | null> {
    const { data, error }:
		{
			data:IModule[] | null;
			error:PostgrestError | null
		} = await supabase.from('modules').select('*')
	error? console.log(error) : null

    return data
}