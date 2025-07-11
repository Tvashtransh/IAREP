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
      
      // Idea details
      idea_name: formData.aspiringIdea?.name || '',
      industry: formData.aspiringIdea?.industry || '',
      interests: formData.aspiringInterests || [],
      idea_description: formData.ideaDescription || '',
      
      // Startup details
      current_stage: formData.ideaDetailsStep3?.stage || '',
      team_size: formData.ideaDetailsStep3?.team || '',
      revenue_status: formData.ideaDetailsStep3?.revenue || '',
      target_audience: formData.ideaDetailsStep3?.targetAudience || '',
      business_model: formData.ideaDetailsStep3?.businessModel || '',
      achievements: formData.ideaDetailsStep3?.achievements || '',
      
      // Challenges and approaches
      challenges: formData.aspiringChallenges || [],
      approaches: formData.aspiringApproaches || [],
      platform_name: formData.aspiringPlatformName || '',
      satisfaction_level: formData.aspiringSatisfaction || '',
      
      // Goals and timeline
      timeline: formData.aspiringTimeline || '',
      looking_for: formData.aspiringLookingFor || [],
      ascendthon_interest: formData.aspiringAscendThon || '',
      
      // Founder specific fields
      founder_duration: formData.founderDuration || '',
      founder_product_status: formData.founderProductStatus || '',
      founder_stage: formData.founderStage || '',
      has_business: formData.aspiringHasBusiness || '',
      product_link: formData.aspiringProductLink || '',
      
      // File uploads (we'll handle file upload separately if needed)
      pitch_deck_file_name: formData.pitchDeckFile?.name || '',
      pitch_deck_link: formData.pitchDeckLink || ''
    };

    // Insert into Supabase
    const { data, error } = await supabase
      .from('validate_idea_submissions')
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
        message: 'Form submitted successfully!',
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