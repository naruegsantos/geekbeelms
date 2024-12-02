import { supabase } from "@/app/lib/db"
import { IUser } from "./types"
import { PostgrestError } from "@supabase/supabase-js";

export async function SELECT():Promise<IUser[] | null> {
    const { data, error }: {
			data:IUser[] | null;
			error:PostgrestError | null
		} = await supabase.from('users').select('*')
	error? console.log(error) : null

    return data
}