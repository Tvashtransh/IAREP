import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient.js';

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Prepare data for database insertion
    const submissionData = {
      role: formData.role,
      
      // User details
      full_name: formData.userDetails?.fullName || '',
      email: formData.userDetails?.email || '',
      mobile: formData.userDetails?.mobile || '',
      educational_degree: formData.userDetails?.educationalDegree || '',
      college: formData.userDetails?.college || '',
      city: formData.userDetails?.city || '',
      linkedin: formData.userDetails?.linkedin || '',
      
      // Idea/Business description
      idea_description: formData.aspiringIdeaDescription || '',
      business_description: formData.founderBusinessDescription || '',
      
      // Startup/Business details
      current_stage: formData.aspiringIdeaDetailsStep?.stage || formData.founderBusinessDetailsStep?.stage || '',
      team_size: formData.aspiringIdeaDetailsStep?.team || formData.founderBusinessDetailsStep?.team || '',
      revenue_status: formData.aspiringIdeaDetailsStep?.revenue || formData.founderBusinessDetailsStep?.revenue || '',
      target_audience: formData.aspiringIdeaDetailsStep?.targetAudience || formData.founderBusinessDetailsStep?.targetAudience || '',
      business_model: formData.aspiringIdeaDetailsStep?.businessModel || formData.founderBusinessDetailsStep?.businessModel || '',
      achievements: formData.aspiringIdeaDetailsStep?.achievements || formData.founderBusinessDetailsStep?.achievements || '',
      
      // Interests
      interests: formData.aspiringInterests || formData.founderInterests || [],
      
      // Challenges and approaches
      challenges: formData.aspiringChallenges || formData.founderChallenges || [],
      approaches: formData.aspiringApproaches || formData.founderApproaches || [],
      platform_name: formData.aspiringPlatformName || formData.founderPlatformName || '',
      satisfaction_level: formData.aspiringSatisfaction || formData.founderSatisfaction || '',
      
      // Goals and timeline
      timeline: formData.aspiringTimeline || formData.founderTimeline || '',
      looking_for: formData.aspiringLookingFor || formData.founderLookingFor || [],
      ascendthon_interest: formData.aspiringAscendThon || formData.founderAscendThon || '',
      
      // Past startup experience (for founders)
      past_startup_stages: formData.founderPastStartupStages || [],
      
      // File uploads
      pitch_deck_file_name: formData.aspiringPitchDeckFile?.name || formData.founderPitchDeckFile?.name || '',
      pitch_deck_link: formData.aspiringPitchDeckLink || formData.founderPitchDeckLink || ''
    };

    // Insert into Supabase
    const { data, error } = await supabase
      .from('pitch_submissions')
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
        message: 'Pitch submitted successfully!',
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