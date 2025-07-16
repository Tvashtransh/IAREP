import { supabase } from './supabaseClient.js';

export async function testSupabaseConnection() {
  try {
    // Test basic connection
    const { data, error } = await supabase
      .from('validate_idea_submissions')
      .select('count')
      .limit(1);
    
    if (error) {
      console.error('Supabase connection test failed:', error);
      return { success: false, error: error.message };
    }
    
    console.log('Supabase connection successful!');
    return { success: true };
    
  } catch (error) {
    console.error('Connection test error:', error);
    return { success: false, error: error.message };
  }
} 