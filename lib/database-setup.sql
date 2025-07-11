-- Database setup for IdeaAscend forms
-- Run this in your Supabase SQL Editor

-- Table for Validate Idea Form submissions
CREATE TABLE IF NOT EXISTS validate_idea_submissions (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Role selection
    role VARCHAR(20) NOT NULL CHECK (role IN ('aspiring', 'founder')),
    
    -- User details (Step 2)
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobile VARCHAR(20) NOT NULL,
    educational_degree VARCHAR(255) NOT NULL,
    college VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    linkedin VARCHAR(255),
    
    -- Idea details (Step 3)
    idea_name VARCHAR(255),
    industry VARCHAR(255),
    interests TEXT[], -- Array of selected interests
    idea_description TEXT,
    
    -- Startup details (Step 4)
    current_stage VARCHAR(100),
    team_size VARCHAR(50),
    revenue_status VARCHAR(100),
    target_audience TEXT,
    business_model VARCHAR(100),
    achievements TEXT,
    
    -- Challenges and approaches (Step 5)
    challenges TEXT[], -- Array of challenges
    approaches TEXT[], -- Array of approaches
    platform_name VARCHAR(255),
    satisfaction_level VARCHAR(100),
    
    -- Goals and timeline (Step 6)
    timeline VARCHAR(100),
    looking_for TEXT[], -- Array of things they're looking for
    ascendthon_interest VARCHAR(50),
    
    -- Founder specific fields
    founder_duration VARCHAR(100),
    founder_product_status VARCHAR(100),
    founder_stage VARCHAR(100),
    has_business VARCHAR(10),
    product_link VARCHAR(500),
    
    -- File uploads
    pitch_deck_file_name VARCHAR(255),
    pitch_deck_file_url VARCHAR(500),
    pitch_deck_link VARCHAR(500)
);

-- Table for Pitch Form submissions
CREATE TABLE IF NOT EXISTS pitch_submissions (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Role selection
    role VARCHAR(20) NOT NULL CHECK (role IN ('aspiring', 'founder')),
    
    -- User details (Step 2)
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobile VARCHAR(20) NOT NULL,
    educational_degree VARCHAR(255) NOT NULL,
    college VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    linkedin VARCHAR(255),
    
    -- Idea/Business description (Step 3)
    idea_description TEXT,
    business_description TEXT,
    
    -- Startup/Business details (Step 4)
    current_stage VARCHAR(100),
    team_size VARCHAR(50),
    revenue_status VARCHAR(100),
    target_audience TEXT,
    business_model VARCHAR(100),
    achievements TEXT,
    
    -- Interests
    interests TEXT[], -- Array of selected interests
    
    -- Challenges and approaches (Step 5)
    challenges TEXT[], -- Array of challenges
    approaches TEXT[], -- Array of approaches
    platform_name VARCHAR(255),
    satisfaction_level VARCHAR(100),
    
    -- Goals and timeline (Step 6)
    timeline VARCHAR(100),
    looking_for TEXT[], -- Array of things they're looking for
    ascendthon_interest VARCHAR(50),
    
    -- Past startup experience (for founders)
    past_startup_stages TEXT[],
    
    -- File uploads
    pitch_deck_file_name VARCHAR(255),
    pitch_deck_file_url VARCHAR(500),
    pitch_deck_link VARCHAR(500)
);

-- Table for Business Form submissions
CREATE TABLE IF NOT EXISTS business_form_submissions (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Role selection
    role VARCHAR(20) NOT NULL CHECK (role IN ('jobseeker', 'aspiring', 'founder')),
    
    -- User details (Step 2)
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobile VARCHAR(20) NOT NULL,
    educational_degree VARCHAR(255) NOT NULL,
    college VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    linkedin VARCHAR(255),
    
    -- Job seeker specific fields
    job_seeker_connect TEXT[], -- Array of connection preferences
    job_seeker_collab TEXT[], -- Array of collaboration preferences
    has_startup_exp VARCHAR(10),
    startup_exp_name VARCHAR(255),
    startup_exp_role VARCHAR(255),
    startup_exp_duration VARCHAR(100),
    startup_exp_value TEXT,
    startup_exp_lacks TEXT,
    open_to_startup VARCHAR(10),
    selected_interests TEXT[], -- Array of interests
    
    -- Resume upload
    resume_file_name VARCHAR(255),
    resume_file_url VARCHAR(500),
    resume_link VARCHAR(500),
    resume_upload_method VARCHAR(20),
    
    -- Aspiring entrepreneur fields
    idea_name VARCHAR(255),
    idea_industry VARCHAR(255),
    aspiring_interests TEXT[],
    aspiring_describe TEXT,
    aspiring_problem TEXT,
    aspiring_solution TEXT,
    aspiring_inspiration TEXT,
    
    -- Detailed idea description
    idea_description TEXT,
    
    -- Startup details (Step 4 for aspiring/founder)
    current_stage VARCHAR(100),
    team_size VARCHAR(50),
    revenue_status VARCHAR(100),
    target_audience TEXT,
    business_model VARCHAR(100),
    achievements TEXT,
    
    -- Motivation and goals
    aspiring_motivation TEXT,
    aspiring_goals TEXT,
    founder_motivation TEXT,
    founder_goals TEXT,
    
    -- File uploads for pitch deck
    pitch_deck_file_name VARCHAR(255),
    pitch_deck_file_url VARCHAR(500),
    pitch_deck_link VARCHAR(500)
);

-- Enable Row Level Security (RLS)
ALTER TABLE validate_idea_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE pitch_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public insert (for form submissions)
CREATE POLICY "Allow public insert" ON validate_idea_submissions 
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert" ON pitch_submissions 
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert" ON business_form_submissions 
    FOR INSERT WITH CHECK (true);

-- Create policies to allow authenticated users to read their own submissions
CREATE POLICY "Users can view own submissions" ON validate_idea_submissions 
    FOR SELECT USING (true); -- You can add auth.email() = email if you implement auth

CREATE POLICY "Users can view own submissions" ON pitch_submissions 
    FOR SELECT USING (true);

CREATE POLICY "Users can view own submissions" ON business_form_submissions 
    FOR SELECT USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_validate_idea_email ON validate_idea_submissions(email);
CREATE INDEX IF NOT EXISTS idx_validate_idea_created_at ON validate_idea_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_validate_idea_role ON validate_idea_submissions(role);

CREATE INDEX IF NOT EXISTS idx_pitch_email ON pitch_submissions(email);
CREATE INDEX IF NOT EXISTS idx_pitch_created_at ON pitch_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_pitch_role ON pitch_submissions(role);

CREATE INDEX IF NOT EXISTS idx_business_form_email ON business_form_submissions(email);
CREATE INDEX IF NOT EXISTS idx_business_form_created_at ON business_form_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_business_form_role ON business_form_submissions(role); 