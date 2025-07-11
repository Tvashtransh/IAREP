# Quick Supabase Database Setup for IdeaAscend Forms

## Step 1: Open Supabase Dashboard
1. Go to [https://supabase.com](https://supabase.com)
2. Sign in to your account
3. Select your IdeaAscend project

## Step 2: Run Database Setup
1. In your Supabase dashboard, click on "SQL Editor" in the left sidebar
2. Click "New Query"
3. Copy the entire content from `lib/database-setup.sql` file
4. Paste it into the SQL editor
5. Click "Run" button

This will create 3 tables:
- `validate_idea_submissions` - For the validate idea form
- `pitch_submissions` - For the pitch form  
- `business_form_submissions` - For the business form

## Step 3: Test Forms
Your forms are now connected! Test each form:

1. **Validate Idea Form**: `/validate-idea/apply`
2. **Pitch Form**: `/pitch`
3. **Business Form**: `/business-form`

## View Submissions
In Supabase dashboard:
1. Go to "Table Editor"
2. Select any of the 3 tables to view submissions
3. You can see all form data organized in columns

## That's it! 
All three forms are now automatically saving to your Supabase database. No additional configuration needed. 