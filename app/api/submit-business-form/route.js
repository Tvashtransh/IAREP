import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient.js';

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Prepare data for database insertion
    const submissionData = {
      role: formData.role || formData.selected,
      
      // User details
      full_name: formData.userDetails?.fullName || '',
      email: formData.userDetails?.email || '',
      mobile: formData.userDetails?.mobile || '',
      educational_degree: formData.userDetails?.educationalDegree || '',
      college: formData.userDetails?.college || '',
      city: formData.userDetails?.city || '',
      linkedin: formData.userDetails?.linkedin || '',
      
      // Job seeker specific fields
      job_seeker_connect: formData.jobSeekerConnect || [],
      job_seeker_collab: formData.jobSeekerCollab || [],
      has_startup_exp: formData.hasStartupExp || '',
      startup_exp_name: formData.startupExpDetails?.name || '',
      startup_exp_role: formData.startupExpDetails?.role || '',
      startup_exp_duration: formData.startupExpDetails?.duration || '',
      startup_exp_value: formData.startupExpDetails?.value || '',
      startup_exp_lacks: formData.startupExpDetails?.lacks || '',
      open_to_startup: formData.openToStartup || '',
      selected_interests: formData.selectedInterests || [],
      
      // Resume upload
      resume_file_name: formData.resumeFile?.name || '',
      resume_link: formData.resumeLink || '',
      resume_upload_method: formData.resumeUploadMethod || '',
      
      // Aspiring entrepreneur fields
      idea_name: formData.aspiringIdea?.name || '',
      idea_industry: formData.aspiringIdea?.industry || '',
      aspiring_interests: formData.aspiringInterests || [],
      aspiring_describe: formData.aspiringDetails?.describe || '',
      aspiring_problem: formData.aspiringDetails?.problem || '',
      aspiring_solution: formData.aspiringDetails?.solution || '',
      aspiring_inspiration: formData.aspiringDetails?.inspiration || '',
      
      // Detailed idea description
      idea_description: formData.ideaDescription || '',
      
      // Startup details (Step 4 for aspiring/founder)
      current_stage: formData.ideaDetailsStep4?.stage || '',
      team_size: formData.ideaDetailsStep4?.team || '',
      revenue_status: formData.ideaDetailsStep4?.revenue || '',
      target_audience: formData.ideaDetailsStep4?.targetAudience || '',
      business_model: formData.ideaDetailsStep4?.businessModel || '',
      achievements: formData.ideaDetailsStep4?.achievements || '',
      
      // Motivation and goals
      aspiring_motivation: formData.aspiringMotivationStep || '',
      aspiring_goals: formData.aspiringGoalsStep || '',
      founder_motivation: formData.founderMotivationStep || '',
      founder_goals: formData.founderGoalsStep || '',
      
      // File uploads for pitch deck (if any)
      pitch_deck_file_name: formData.pitchDeckFile?.name || '',
      pitch_deck_link: formData.pitchDeckLink || ''
    };

    // Insert into Supabase
    const { data, error } = await supabase
      .from('business_form_submissions')
      .insert([submissionData])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { success: false, error: 'Database error: ' + error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Business form submitted successfully!',
        submissionId: data[0]?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, error: 'Server error: ' + error.message },
      { status: 500 }
    );
  }
} 