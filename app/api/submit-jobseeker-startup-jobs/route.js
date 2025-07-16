import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient.js';

export async function POST(request) {
  try {
    const formData = await request.json();

    const submissionData = {
      // User details
      full_name: formData.userDetails?.fullName || '',
      email: formData.userDetails?.email || '',
      mobile: formData.userDetails?.mobile || '',
      educational_degree: formData.userDetails?.educationalDegree || '',
      college: formData.userDetails?.college || '',
      city: formData.userDetails?.city || '',
      linkedin: formData.userDetails?.linkedin || '',

      // Career interests
      jobseeker_roles: formData.jobSeekerRoles || '',
      jobseeker_hopes: formData.jobSeekerHopes || '',
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

      // Resume
      resume_file_name: formData.resumeFile?.name || '',
      resume_link: formData.resumeLink || '',
      resume_upload_method: formData.resumeUploadMethod || '',
      is_drag_over: formData.isDragOver || false,

      // Submission status
      submit_success: formData.submitSuccess || false
    };

    const { data, error } = await supabase
      .from('jobseeker_startup_jobs_submissions')
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
        message: 'Jobseeker startup jobs form submitted successfully!',
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