import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) throw new Error('SUPABASE_URL is missing from .env!');
if (!supabaseKey) throw new Error('SUPABASE_SERVICE_KEY is missing from .env!');

const supabase = createClient(supabaseUrl, supabaseKey);

// async function test() {
//   const { data, error } = await supabase.from('coffee_shops').select('*').limit(1);
//   console.log('Error:', error);
//   console.log('Data:', data);
// }

// test();

export default supabase;