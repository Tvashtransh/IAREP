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
      
      // Aspiring entrepreneur fields
      aspiring_idea_name: formData.aspiringIdea?.name || '',
      aspiring_idea_industry: formData.aspiringIdea?.industry || '',
      aspiring_idea_description: formData.aspiringIdeaDescription || '',
      aspiring_interests: formData.aspiringInterests || [],
      aspiring_idea_details_stage: formData.aspiringIdeaDetailsStep?.stage || '',
      aspiring_idea_details_team: formData.aspiringIdeaDetailsStep?.team || '',
      aspiring_idea_details_revenue: formData.aspiringIdeaDetailsStep?.revenue || '',
      aspiring_idea_details_target_audience: formData.aspiringIdeaDetailsStep?.targetAudience || '',
      aspiring_idea_details_business_model: formData.aspiringIdeaDetailsStep?.businessModel || '',
      aspiring_idea_details_achievements: formData.aspiringIdeaDetailsStep?.achievements || '',
      aspiring_duration: formData.aspiringDuration || '',
      aspiring_validation: formData.aspiringValidation || '',
      aspiring_prototype: formData.aspiringPrototype || '',
      aspiring_has_business: formData.aspiringHasBusiness || '',
      aspiring_has_team: formData.aspiringHasTeam || '',
      aspiring_skills: formData.aspiringSkills || '',
      aspiring_challenge: formData.aspiringChallenge || '',
      aspiring_motivation: formData.aspiringMotivation || '',
      aspiring_goals: formData.aspiringGoals || '',
      aspiring_consent: formData.aspiringConsent || false,
      aspiring_pitch_deck_upload_method: formData.aspiringPitchDeckUploadMethod || '',
      aspiring_timeline_support: formData.aspiringTimelineSupport || '',
      aspiring_investment_details: formData.aspiringInvestmentDetails || '',
      aspiring_funding_requirement: formData.aspiringFundingRequirement || '',
      aspiring_self_invested: formData.aspiringSelfInvested || '',
      
      // Founder fields
      founder_idea_name: formData.founderIdea?.name || '',
      founder_idea_industry: formData.founderIdea?.industry || '',
      founder_business_description: formData.founderBusinessDescription || '',
      founder_interests: formData.founderInterests || [],
      founder_stage: formData.founderStage || '',
      founder_duration: formData.founderDuration || '',
      founder_business_model: formData.founderBusinessModel || '',
      founder_product_status: formData.founderProductStatus || '',
      founder_business_details_stage: formData.founderBusinessDetailsStep?.stage || '',
      founder_business_details_team: formData.founderBusinessDetailsStep?.team || '',
      founder_business_details_revenue: formData.founderBusinessDetailsStep?.revenue || '',
      founder_business_details_target_audience: formData.founderBusinessDetailsStep?.targetAudience || '',
      founder_business_details_business_model: formData.founderBusinessDetailsStep?.businessModel || '',
      founder_business_details_achievements: formData.founderBusinessDetailsStep?.achievements || '',
      founder_has_past_exp: formData.founderHasPastExp || '',
      founder_past_exp_name: formData.founderPastExpDetails?.name || '',
      founder_past_exp_role: formData.founderPastExpDetails?.role || '',
      founder_past_exp_sector: formData.founderPastExpDetails?.sector || '',
      founder_past_exp_stage: formData.founderPastExpDetails?.stage || '',
      founder_team_status: formData.founderTeamStatus || '',
      founder_missing_roles: formData.founderMissingRoles || '',
      founder_team_confidence: formData.founderTeamConfidence || '',
      founder_launch_plan: formData.founderLaunchPlan || '',
      founder_funding: formData.founderFunding || '',
      founder_personal_investment: formData.founderPersonalInvestment || '',
      founder_investment_details: formData.founderInvestmentDetails || '',
      founder_support: formData.founderSupport || [],
      founder_support_other: formData.founderSupportOther || '',
      founder_context: formData.founderContext || '',
      founder_has_team: formData.founderHasTeam || '',
      founder_skills: formData.founderSkills || '',
      founder_challenge: formData.founderChallenge || '',
      founder_motivation: formData.founderMotivation || '',
      founder_goals: formData.founderGoals || '',
      founder_consent: formData.founderConsent || false,
      founder_pitch_deck_upload_method: formData.founderPitchDeckUploadMethod || '',
      goal1: formData.goal1 || '',
      goal2: formData.goal2 || '',
      goal3: formData.goal3 || '',
      launch_plan: formData.launchPlan || '',
      funding_requirement: formData.fundingRequirement || '',
      self_invested: formData.selfInvested || '',
      founder_past_startup_stages: formData.founderPastStartupStages || [],
      founder_support_needed: formData.founderSupportNeeded || [],
      
      // Challenges and approaches (both roles)
      aspiring_challenges: formData.aspiringChallenges || [],
      founder_challenges: formData.founderChallenges || [],
      aspiring_approaches: formData.aspiringApproaches || [],
      founder_approaches: formData.founderApproaches || [],
      aspiring_platform_name: formData.aspiringPlatformName || '',
      founder_platform_name: formData.founderPlatformName || '',
      aspiring_satisfaction: formData.aspiringSatisfaction || '',
      founder_satisfaction: formData.founderSatisfaction || '',
      
      // Goals and timeline (both roles)
      aspiring_timeline: formData.aspiringTimeline || '',
      founder_timeline: formData.founderTimeline || '',
      aspiring_looking_for: formData.aspiringLookingFor || [],
      founder_looking_for: formData.founderLookingFor || [],
      aspiring_ascendthon: formData.aspiringAscendThon || '',
      founder_ascendthon: formData.founderAscendThon || '',
      
      // Pitch deck information (both roles)
      aspiring_pitch_deck_file_name: formData.aspiringPitchDeckFile?.name || '',
      founder_pitch_deck_file_name: formData.founderPitchDeckFile?.name || '',
      aspiring_pitch_deck_link: formData.aspiringPitchDeckLink || '',
      founder_pitch_deck_link: formData.founderPitchDeckLink || ''
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
        message: 'Pitch form submitted successfully!',
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