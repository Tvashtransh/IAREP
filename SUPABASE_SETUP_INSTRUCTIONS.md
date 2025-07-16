# Supabase Setup Instructions for IdeaAscend Validate Idea Form

## Step 1: Database Setup
1. Go to your Supabase Dashboard: https://shjtfbosgouebllraqvl.supabase.co
2. Navigate to "SQL Editor" in the left sidebar
3. Click "New Query"
4. Copy the entire content from `lib/database-setup.sql`
5. Paste it into the SQL editor
6. Click "Run" to execute the SQL

This will create the `validate_idea_submissions` table with all necessary fields and security policies.

## Step 2: Environment Variables
The environment variables are already set in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## Step 3: Test the Form
1. Start your development server: `npm run dev`
2. Navigate to `/validate-idea/apply`
3. Fill out and submit the form
4. Check your Supabase dashboard under "Table Editor" → "validate_idea_submissions"

## Step 4: View Submissions (Admin)
Navigate to `/admin/validate-idea-submissions` to view all form submissions in a user-friendly interface.

## Database Schema Overview
The `validate_idea_submissions` table includes:
- **User Details**: Name, email, mobile, education, college, city, LinkedIn
- **Idea Information**: Name, industry, description, interests
- **Business Details**: Stage, team size, revenue status, target audience, business model
- **Validation Data**: Founder duration, product status, challenges, approaches
- **Goals**: Timeline, what they're looking for, Ascendthon interest
- **Pitch Deck**: File name and link information
- **Metadata**: Submission timestamp, status, admin notes

## Security Features
- Row Level Security (RLS) enabled
- Public insert policy for form submissions
- Authenticated read policy for admin access
- Proper indexing for performance

Your validate idea form is now fully connected to Supabase! 