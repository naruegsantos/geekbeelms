import { supabase } from "@/app/lib/db"
import { IStep } from "./types"
import { PostgrestError } from "@supabase/supabase-js";

export async function SELECT():Promise<IStep[] | null> {
    const { data, error }:
		{
			data:IStep[] | null;
			error:PostgrestError | null
		} = await supabase.from('steps').select('*')
	error? console.log(error) : null

    return data
}