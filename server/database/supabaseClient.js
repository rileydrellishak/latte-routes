import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl) throw new Error('SUPABASE_URL is missing from .env!');
if (!supabaseKey) throw new Error('SUPABASE_SERVICE_KEY is missing from .env!');

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;