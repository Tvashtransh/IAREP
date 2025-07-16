# Quick Setup Guide for IdeaAscend

## Prerequisites
- Node.js (v18+)
- npm or yarn

## Installation Steps
1. Clone the repository
2. Run `npm install`
3. Set up environment variables

## Development
- Run `npm run dev`
- Open `http://localhost:3000`

## Deployment
- Build: `npm run build`
- Start: `npm start`

## Project Structure
- `app/`: Main application code
- `components/`: Reusable React components
- `lib/`: Utility functions and configurations
- `public/`: Static assets

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to your fork
5. Create a pull request

# ✅ IdeaAscend Forms Database Setup Complete!

## What I've Set Up For You

### 🗄️ Database Tables Created
1. **validate_idea_submissions** - Stores validate idea form data
2. **pitch_submissions** - Stores pitch form data  
3. **business_form_submissions** - Stores business form data

### 🔌 API Endpoints Created
- `/api/submit-validate-idea` - For validate idea form
- `/api/submit-pitch` - For pitch form
- `/api/submit-business-form` - Updated for new schema

### 📝 Forms Connected
✅ **Validate Idea Form** (`/validate-idea/apply`) - Fully connected with submission logic
✅ **Pitch Form** (`/pitch`) - Fully connected with submission logic
✅ **Business Form** (`/business-form`) - Already connected, updated schema

## 🚀 Next Steps (Only 2 minutes!)

### Step 1: Run Database Setup
1. Go to [Supabase Dashboard](https://supabase.com)
2. Open "SQL Editor" 
3. Copy content from `lib/database-setup.sql`
4. Paste and click "Run"

### Step 2: Test Forms
Visit these URLs to test:
- http://localhost:3000/validate-idea/apply
- http://localhost:3000/pitch  
- http://localhost:3000/business-form

## 📊 View Submissions
In Supabase dashboard → "Table Editor" → Select any table to see form submissions!

## ✨ Features Added
- **Loading states** during submission
- **Error handling** with user-friendly messages  
- **Success redirects** to WhatsApp community
- **Form validation** before submission
- **Organized data storage** with proper field mapping

**That's it!** All your forms now automatically save to Supabase database with zero additional code needed.

# ✅ IdeaAscend Validate Idea Form - Setup Complete!

## 🎯 What's Ready
Your **Validate Idea Form** is now fully connected to Supabase with complete data capture!

## 🚀 Quick Start
1. **Run SQL Setup**: Copy content from `lib/database-setup.sql` → Supabase SQL Editor → Run
2. **Test Form**: Your dev server is running → Visit `/validate-idea/apply`
3. **View Submissions**: Admin panel at `/admin/validate-idea-submissions`

## 📊 Database Schema
**Table**: `validate_idea_submissions`
- ✅ **User Details**: Name, email, mobile, education, college, city, LinkedIn
- ✅ **Idea Information**: Name, industry, description, interests (array)
- ✅ **Business Details**: Stage, team size, revenue, target audience, business model
- ✅ **Validation Data**: Founder duration, product status, challenges (array), approaches (array)
- ✅ **Goals & Timeline**: What they're looking for (array), timeline, Ascendthon interest
- ✅ **Pitch Deck**: File name and link support
- ✅ **Metadata**: Timestamps, submission status, admin notes

## 🔧 Technical Setup
- ✅ Environment variables configured (`.env.local`)
- ✅ Supabase client created (`lib/supabaseClient.js`)
- ✅ API route updated (`app/api/submit-validate-idea/route.js`)
- ✅ Admin dashboard enhanced (`app/admin/validate-idea-submissions/page.jsx`)
- ✅ Row Level Security (RLS) policies configured
- ✅ Proper indexing for performance

## 🔒 Security Features
- ✅ Public insert policy for form submissions
- ✅ Authenticated read policy for admin access
- ✅ Input validation and error handling
- ✅ Secure environment variable management

## 🎉 Ready to Use!
Your comprehensive validate idea form captures everything from role selection to pitch deck uploads. All submissions are automatically saved to Supabase with a beautiful admin interface for review.

**Next**: Set up pitch form and business form with similar comprehensive schemas!

# Quick Supabase Setup for IAREP Forms

## ✅ What's Already Done

1. **Supabase Client**: Updated `lib/supabaseClient.js` with proper error handling
2. **Validate Idea API Route**: `app/api/submit-validate-idea/route.js` is ready to use
3. **Validate Idea Form**: `app/validate-idea/apply/page.jsx` is already connected to the API
4. **Pitch Form API Route**: `app/api/submit-pitch/route.js` is updated and ready
5. **Pitch Form**: `app/pitch/page.tsx` is connected to the API
6. **SQL Schema**: `lib/database-setup.sql` contains both table structures

## 🚀 Quick Setup Steps

### 1. Environment Variables
Make sure your `.env.local` has:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Create Database Table
Run this SQL in your Supabase SQL Editor:
```sql
-- Copy and paste the contents of lib/database-setup.sql
```

### 3. Test Connection
Both forms are already connected! Test them by:
1. **Validate Idea Form**: Go to `/validate-idea/apply`
2. **Pitch Form**: Go to `/pitch`
3. Fill out the forms and submit

## 📋 For Other Forms

To connect other forms quickly:

1. **Create API Route**: Copy `app/api/submit-validate-idea/route.js` and modify for your form
2. **Create Table**: Use the same pattern in `lib/database-setup.sql`
3. **Update Form**: Add fetch call to your API route

## 🔧 Troubleshooting

- **Connection Error**: Check your `.env.local` variables
- **Table Not Found**: Run the SQL in Supabase SQL Editor
- **CORS Error**: Make sure your Supabase URL is correct

## 📊 Database Schema

### Validate Idea Submissions Table
The `validate_idea_submissions` table includes:
- User details (name, email, mobile, etc.)
- Idea information (name, description, industry)
- Form-specific data (challenges, approaches, timeline)
- File upload info (pitch deck)

### Pitch Submissions Table
The `pitch_submissions` table includes:
- User details (name, email, mobile, etc.)
- Role-specific fields (aspiring vs founder)
- Idea/business descriptions and details
- Challenges, approaches, and goals
- Timeline and support needs
- Pitch deck information

All arrays are stored as PostgreSQL arrays for easy querying. 