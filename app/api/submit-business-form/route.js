import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient.js';

export async function POST(request) {
  try {
    const formData = await request.json();

    // Prepare data for database insertion
    const submissionData = {
      role: formData.selected || '',

      // User details
      full_name: formData.userDetails?.fullName || '',
      email: formData.userDetails?.email || '',
      mobile: formData.userDetails?.mobile || '',
      educational_degree: formData.userDetails?.educationalDegree || '',
      college: formData.userDetails?.college || '',
      city: formData.userDetails?.city || '',
      linkedin: formData.userDetails?.linkedin || '',

      // Jobseeker fields
      jobseeker_connect: formData.jobSeekerConnect || [],
      jobseeker_collab: formData.jobSeekerCollab || [],
      has_startup_exp: formData.hasStartupExp || '',
      startup_exp_name: formData.startupExpDetails?.name || '',
      startup_exp_role: formData.startupExpDetails?.role || '',
      startup_exp_duration: formData.startupExpDetails?.duration || '',
      startup_exp_value: formData.startupExpDetails?.value || '',
      startup_exp_lacks: formData.startupExpDetails?.lacks || '',
      open_to_startup: formData.openToStartup || '',
      jobseeker_interests: formData.selectedInterests || [],
      resume_file_name: formData.resumeFile?.name || '',
      resume_link: formData.resumeLink || '',
      resume_upload_method: formData.resumeUploadMethod || '',
      jobseeker_roles: formData.jobSeekerRoles || '',
      jobseeker_hopes: formData.jobSeekerHopes || '',

      // Aspiring fields
      aspiring_idea_name: formData.aspiringIdea?.name || '',
      aspiring_idea_industry: formData.aspiringIdea?.industry || '',
      aspiring_interests: formData.aspiringInterests || [],
      aspiring_describe: formData.aspiringDetails?.describe || '',
      aspiring_problem: formData.aspiringDetails?.problem || '',
      aspiring_solution: formData.aspiringDetails?.solution || '',
      aspiring_inspiration: formData.aspiringDetails?.inspiration || '',
      aspiring_idea_description: formData.ideaDescription || '',
      aspiring_stage: formData.ideaDetailsStep4?.stage || '',
      aspiring_team: formData.ideaDetailsStep4?.team || '',
      aspiring_revenue: formData.ideaDetailsStep4?.revenue || '',
      aspiring_target_audience: formData.ideaDetailsStep4?.targetAudience || '',
      aspiring_business_model: formData.ideaDetailsStep4?.businessModel || '',
      aspiring_achievements: formData.ideaDetailsStep4?.achievements || '',
      aspiring_duration: formData.aspiringDuration || '',
      aspiring_validation: formData.aspiringValidation || '',
      aspiring_prototype: formData.aspiringPrototype || '',
      aspiring_motivation_step: formData.aspiringMotivationStep || '',
      aspiring_goals_step: formData.aspiringGoalsStep || '',
      aspiring_challenges: formData.aspiringChallenges || [],
      aspiring_other_challenge: formData.aspiringOtherChallenge || '',
      aspiring_frequency: formData.aspiringFrequency || '',
      aspiring_approaches: formData.aspiringApproaches || [],
      aspiring_platform_name: formData.aspiringPlatformName || '',
      aspiring_satisfaction: formData.aspiringSatisfaction || '',
      aspiring_product_link: formData.aspiringProductLink || '',
      aspiring_has_business: formData.aspiringHasBusiness || '',
      aspiring_pitch_deck_file_name: formData.aspiringPitchDeckFile?.name || '',
      aspiring_pitch_deck_link: formData.aspiringPitchDeckLink || '',
      aspiring_pitch_deck_upload_method: formData.aspiringPitchDeckUploadMethod || '',
      aspiring_is_drag_over: formData.aspiringIsDragOver || false,
      aspiring_timeline: formData.aspiringTimeline || '',
      aspiring_looking_for: formData.aspiringLookingFor || [],
      aspiring_ascendthon: formData.aspiringAscendThon || '',

      // Founder fields
      founder_idea_name: formData.founderIdea?.name || '',
      founder_idea_industry: formData.founderIdea?.industry || '',
      founder_interests: formData.founderInterests || [],
      founder_stage: formData.founderStage || '',
      founder_duration: formData.founderDuration || '',
      founder_business_model: formData.founderBusinessModel || '',
      founder_product_status: formData.founderProductStatus || '',
      founder_product_link: formData.founderProductLink || '',
      founder_challenges: formData.founderChallenges || [],
      founder_other_challenge: formData.founderOtherChallenge || '',
      founder_frequency: formData.founderFrequency || '',
      founder_approaches: formData.founderApproaches || [],
      founder_platform_name: formData.founderPlatformName || '',
      founder_satisfaction: formData.founderSatisfaction || '',
      founder_has_past_exp: formData.founderHasPastExp || '',
      founder_past_exp_name: formData.founderPastExpDetails?.name || '',
      founder_past_exp_role: formData.founderPastExpDetails?.role || '',
      founder_past_exp_sector: formData.founderPastExpDetails?.sector || '',
      founder_past_exp_stage: formData.founderPastExpDetails?.stage || '',
      founder_team_status: formData.founderTeamStatus || '',
      founder_missing_roles: formData.founderMissingRoles || '',
      founder_team_confidence: formData.founderTeamConfidence || '',
      founder_goals: formData.founderGoals || '',
      founder_launch_plan: formData.founderLaunchPlan || '',
      founder_funding: formData.founderFunding || '',
      founder_personal_investment: formData.founderPersonalInvestment || '',
      founder_investment_details: formData.founderInvestmentDetails || '',
      founder_support: formData.founderSupport || [],
      founder_support_other: formData.founderSupportOther || '',
      founder_context: formData.founderContext || '',
      founder_pitch_deck_file_name: formData.founderPitchDeckFile?.name || '',
      founder_pitch_deck_link: formData.founderPitchDeckLink || '',
      founder_pitch_deck_upload_method: formData.founderPitchDeckUploadMethod || '',
      founder_is_drag_over: formData.founderIsDragOver || false,
      founder_motivation_step: formData.founderMotivationStep || '',
      founder_goals_step: formData.founderGoalsStep || '',

      // General
      form_step: formData.step || null
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