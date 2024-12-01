import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const client = createClient(process.env.DB_URL, process.env.DB_KEY)
    