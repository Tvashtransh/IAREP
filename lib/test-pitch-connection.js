import { supabase } from './supabaseClient.js';
import { testSupabaseConnection } from './test-connection.js';

export async function testPitchFormConnection() {
  try {
    // Test basic connection to pitch_submissions table
    const { data, error } = await supabase
      .from('pitch_submissions')
      .select('count')
      .limit(1);
    
    if (error) {
      console.error('Pitch form connection test failed:', error);
      return { success: false, error: error.message };
    }
    
    console.log('Pitch form connection successful!');
    return { success: true };
    
  } catch (error) {
    console.error('Pitch connection test error:', error);
    return { success: false, error: error.message };
  }
}

// Test both tables
export async function testAllFormConnections() {
  const validateResult = await testSupabaseConnection();
  const pitchResult = await testPitchFormConnection();
  
  return {
    validateIdea: validateResult,
    pitch: pitchResult,
    allWorking: validateResult.success && pitchResult.success
  };
} 