import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kabloexwblzmfztavxzs.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthYmxvZXh3Ymx6bWZ6dGF2eHpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5Njc3ODcsImV4cCI6MjA2NzU0Mzc4N30.z7TQR1fZtjI3ZqD7X64Az2yGTvYO4by_AyLhn1eBDeo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);