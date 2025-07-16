-- Create table for validate idea form submissions
CREATE TABLE IF NOT EXISTS validate_idea_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Role selection
    role TEXT NOT NULL,
    
    -- User details
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    mobile TEXT NOT NULL,
    educational_degree TEXT NOT NULL,
    college TEXT NOT NULL,
    city TEXT NOT NULL,
    linkedin TEXT,
    
    -- Aspiring idea details
    idea_name TEXT,
    idea_industry TEXT,
    interests TEXT[], -- Array of selected interests
    idea_description TEXT,
    
    -- Idea details (Step 3)
    current_stage TEXT,
    team_size TEXT,
    revenue_status TEXT,
    target_audience TEXT,
    business_model TEXT,
    achievements TEXT,
    
    -- Founder/validation details
    founder_duration TEXT,
    founder_product_status TEXT,
    founder_stage TEXT,
    has_business TEXT,
    product_link TEXT,
    
    -- Challenges and approaches
    challenges TEXT[], -- Array of selected challenges
    approaches TEXT[], -- Array of selected approaches
    platform_name TEXT,
    satisfaction_level TEXT,
    
    -- Goals and timeline
    timeline TEXT,
    looking_for TEXT[], -- Array of selected options
    ascendthon_interest TEXT,
    
    -- Pitch deck information
    pitch_deck_file_name TEXT,
    pitch_deck_link TEXT
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_validate_idea_submissions_email ON validate_idea_submissions(email);
CREATE INDEX IF NOT EXISTS idx_validate_idea_submissions_created_at ON validate_idea_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_validate_idea_submissions_role ON validate_idea_submissions(role);

-- Enable Row Level Security (RLS) - optional but recommended
ALTER TABLE validate_idea_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow authenticated users to insert their own submissions
CREATE POLICY "Users can insert their own validate idea submissions" ON validate_idea_submissions
    FOR INSERT WITH CHECK (true); -- Allow all inserts for now, you can restrict later

-- Create policy to allow users to view their own submissions
CREATE POLICY "Users can view their own validate idea submissions" ON validate_idea_submissions
    FOR SELECT USING (true); -- Allow all selects for now, you can restrict later

-- Create policy to allow admins to view all submissions
CREATE POLICY "Admins can view all validate idea submissions" ON validate_idea_submissions
    FOR ALL USING (true); -- Allow all operations for now, you can restrict later

-- ============================================================================
-- PITCH FORM SUBMISSIONS TABLE
-- ============================================================================

-- Create table for pitch form submissions
CREATE TABLE IF NOT EXISTS pitch_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Role selection
    role TEXT NOT NULL,
    
    -- User details
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    mobile TEXT NOT NULL,
    educational_degree TEXT NOT NULL,
    college TEXT NOT NULL,
    city TEXT NOT NULL,
    linkedin TEXT,
    
    -- Aspiring entrepreneur fields
    aspiring_idea_name TEXT,
    aspiring_idea_industry TEXT,
    aspiring_idea_description TEXT,
    aspiring_interests TEXT[], -- Array of selected interests
    aspiring_idea_details_stage TEXT,
    aspiring_idea_details_team TEXT,
    aspiring_idea_details_revenue TEXT,
    aspiring_idea_details_target_audience TEXT,
    aspiring_idea_details_business_model TEXT,
    aspiring_idea_details_achievements TEXT,
    aspiring_duration TEXT,
    aspiring_validation TEXT,
    aspiring_prototype TEXT,
    aspiring_has_business TEXT,
    aspiring_has_team TEXT,
    aspiring_skills TEXT,
    aspiring_challenge TEXT,
    aspiring_motivation TEXT,
    aspiring_goals TEXT,
    aspiring_consent BOOLEAN DEFAULT false,
    aspiring_pitch_deck_upload_method TEXT,
    aspiring_timeline_support TEXT,
    aspiring_investment_details TEXT,
    aspiring_funding_requirement TEXT,
    aspiring_self_invested TEXT,
    
    -- Founder fields
    founder_idea_name TEXT,
    founder_idea_industry TEXT,
    founder_business_description TEXT,
    founder_interests TEXT[], -- Array of selected interests
    founder_stage TEXT,
    founder_duration TEXT,
    founder_business_model TEXT,
    founder_product_status TEXT,
    founder_business_details_stage TEXT,
    founder_business_details_team TEXT,
    founder_business_details_revenue TEXT,
    founder_business_details_target_audience TEXT,
    founder_business_details_business_model TEXT,
    founder_business_details_achievements TEXT,
    founder_has_past_exp TEXT,
    founder_past_exp_name TEXT,
    founder_past_exp_role TEXT,
    founder_past_exp_sector TEXT,
    founder_past_exp_stage TEXT,
    founder_team_status TEXT,
    founder_missing_roles TEXT,
    founder_team_confidence TEXT,
    founder_launch_plan TEXT,
    founder_funding TEXT,
    founder_personal_investment TEXT,
    founder_investment_details TEXT,
    founder_support TEXT[],
    founder_support_other TEXT,
    founder_context TEXT,
    founder_has_team TEXT,
    founder_skills TEXT,
    founder_challenge TEXT,
    founder_motivation TEXT,
    founder_goals TEXT,
    founder_consent BOOLEAN DEFAULT false,
    founder_pitch_deck_upload_method TEXT,
    goal1 TEXT,
    goal2 TEXT,
    goal3 TEXT,
    launch_plan TEXT,
    funding_requirement TEXT,
    self_invested TEXT,
    founder_past_startup_stages TEXT[],
    founder_support_needed TEXT[],
    
    -- Challenges and approaches (both roles)
    aspiring_challenges TEXT[], -- Array of selected challenges
    founder_challenges TEXT[], -- Array of selected challenges
    aspiring_approaches TEXT[], -- Array of selected approaches
    founder_approaches TEXT[], -- Array of selected approaches
    aspiring_platform_name TEXT,
    founder_platform_name TEXT,
    aspiring_satisfaction TEXT,
    founder_satisfaction TEXT,
    
    -- Goals and timeline (both roles)
    aspiring_timeline TEXT,
    founder_timeline TEXT,
    aspiring_looking_for TEXT[], -- Array of selected options
    founder_looking_for TEXT[], -- Array of selected options
    aspiring_ascendthon TEXT,
    founder_ascendthon TEXT,
    
    -- Pitch deck information (both roles)
    aspiring_pitch_deck_file_name TEXT,
    founder_pitch_deck_file_name TEXT,
    aspiring_pitch_deck_link TEXT,
    founder_pitch_deck_link TEXT
);

-- Create indexes for pitch submissions
CREATE INDEX IF NOT EXISTS idx_pitch_submissions_email ON pitch_submissions(email);
CREATE INDEX IF NOT EXISTS idx_pitch_submissions_created_at ON pitch_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_pitch_submissions_role ON pitch_submissions(role);

-- Enable Row Level Security for pitch submissions
ALTER TABLE pitch_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for pitch submissions
CREATE POLICY "Users can insert their own pitch submissions" ON pitch_submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view their own pitch submissions" ON pitch_submissions
    FOR SELECT USING (true);

CREATE POLICY "Admins can view all pitch submissions" ON pitch_submissions
    FOR ALL USING (true);

-- ============================================================================
-- BUSINESS FORM SUBMISSIONS TABLE (ALL ROLES, ALL QUESTIONS)
-- ============================================================================
CREATE TABLE IF NOT EXISTS business_form_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    -- Role selection
    role TEXT NOT NULL,

    -- User details
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    mobile TEXT NOT NULL,
    educational_degree TEXT,
    college TEXT,
    city TEXT,
    linkedin TEXT,

    -- Jobseeker fields
    jobseeker_connect TEXT[],
    jobseeker_collab TEXT[],
    has_startup_exp TEXT,
    startup_exp_name TEXT,
    startup_exp_role TEXT,
    startup_exp_duration TEXT,
    startup_exp_value TEXT,
    startup_exp_lacks TEXT,
    open_to_startup TEXT,
    jobseeker_interests TEXT[],
    resume_file_name TEXT,
    resume_link TEXT,
    resume_upload_method TEXT,
    jobseeker_roles TEXT,
    jobseeker_hopes TEXT,

    -- Aspiring fields
    aspiring_idea_name TEXT,
    aspiring_idea_industry TEXT,
    aspiring_interests TEXT[],
    aspiring_describe TEXT,
    aspiring_problem TEXT,
    aspiring_solution TEXT,
    aspiring_inspiration TEXT,
    aspiring_idea_description TEXT,
    aspiring_stage TEXT,
    aspiring_team TEXT,
    aspiring_revenue TEXT,
    aspiring_target_audience TEXT,
    aspiring_business_model TEXT,
    aspiring_achievements TEXT,
    aspiring_duration TEXT,
    aspiring_validation TEXT,
    aspiring_prototype TEXT,
    aspiring_motivation_step TEXT,
    aspiring_goals_step TEXT,
    aspiring_challenges TEXT[],
    aspiring_other_challenge TEXT,
    aspiring_frequency TEXT,
    aspiring_approaches TEXT[],
    aspiring_platform_name TEXT,
    aspiring_satisfaction TEXT,
    aspiring_product_link TEXT,
    aspiring_has_business TEXT,
    aspiring_pitch_deck_file_name TEXT,
    aspiring_pitch_deck_link TEXT,
    aspiring_pitch_deck_upload_method TEXT,
    aspiring_is_drag_over BOOLEAN,
    aspiring_timeline TEXT,
    aspiring_looking_for TEXT[],
    aspiring_ascendthon TEXT,

    -- Founder fields
    founder_idea_name TEXT,
    founder_idea_industry TEXT,
    founder_interests TEXT[],
    founder_stage TEXT,
    founder_duration TEXT,
    founder_business_model TEXT,
    founder_product_status TEXT,
    founder_product_link TEXT,
    founder_challenges TEXT[],
    founder_other_challenge TEXT,
    founder_frequency TEXT,
    founder_approaches TEXT[],
    founder_platform_name TEXT,
    founder_satisfaction TEXT,
    founder_has_past_exp TEXT,
    founder_past_exp_name TEXT,
    founder_past_exp_role TEXT,
    founder_past_exp_sector TEXT,
    founder_past_exp_stage TEXT,
    founder_team_status TEXT,
    founder_missing_roles TEXT,
    founder_team_confidence TEXT,
    founder_goals TEXT,
    founder_launch_plan TEXT,
    founder_funding TEXT,
    founder_personal_investment TEXT,
    founder_investment_details TEXT,
    founder_support TEXT[],
    founder_support_other TEXT,
    founder_context TEXT,
    founder_pitch_deck_file_name TEXT,
    founder_pitch_deck_link TEXT,
    founder_pitch_deck_upload_method TEXT,
    founder_is_drag_over BOOLEAN,
    founder_motivation_step TEXT,
    founder_goals_step TEXT,

    -- General
    form_step INTEGER
);

CREATE INDEX IF NOT EXISTS idx_business_form_email ON business_form_submissions(email);
CREATE INDEX IF NOT EXISTS idx_business_form_created_at ON business_form_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_business_form_role ON business_form_submissions(role);

ALTER TABLE business_form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert their own business form submissions" ON business_form_submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view their own business form submissions" ON business_form_submissions
    FOR SELECT USING (true);

CREATE POLICY "Admins can view all business form submissions" ON business_form_submissions
    FOR ALL USING (true);

-- ============================================================================
-- JOBSEEKER STARTUP JOBS FORM SUBMISSIONS TABLE (ALL FIELDS, ALL STEPS)
-- ============================================================================
CREATE TABLE IF NOT EXISTS jobseeker_startup_jobs_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    -- User details
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    mobile TEXT NOT NULL,
    educational_degree TEXT,
    college TEXT,
    city TEXT,
    linkedin TEXT,

    -- Career interests
    jobseeker_roles TEXT,
    jobseeker_hopes TEXT,
    jobseeker_connect TEXT[],
    jobseeker_collab TEXT[],
    has_startup_exp TEXT,
    startup_exp_name TEXT,
    startup_exp_role TEXT,
    startup_exp_duration TEXT,
    startup_exp_value TEXT,
    startup_exp_lacks TEXT,
    open_to_startup TEXT,
    jobseeker_interests TEXT[],

    -- Resume
    resume_file_name TEXT,
    resume_link TEXT,
    resume_upload_method TEXT,
    is_drag_over BOOLEAN,

    -- Submission status
    submit_success BOOLEAN DEFAULT false
);

CREATE INDEX IF NOT EXISTS idx_jobseeker_startup_jobs_email ON jobseeker_startup_jobs_submissions(email);
CREATE INDEX IF NOT EXISTS idx_jobseeker_startup_jobs_created_at ON jobseeker_startup_jobs_submissions(created_at);

ALTER TABLE jobseeker_startup_jobs_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert their own jobseeker startup jobs submissions" ON jobseeker_startup_jobs_submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view their own jobseeker startup jobs submissions" ON jobseeker_startup_jobs_submissions
    FOR SELECT USING (true);

CREATE POLICY "Admins can view all jobseeker startup jobs submissions" ON jobseeker_startup_jobs_submissions
    FOR ALL USING (true); 