# 🚀 Complete Setup Guide - Portfolio with Supabase Backend

## What's New in v2.0

✅ **Supabase Integration** - Cloud database with real-time capabilities  
✅ **Latest Dependencies** - All packages updated to latest versions  
✅ **Enhanced Admin UI** - Full CRUD interface for managing portfolio data  
✅ **Real-time Sync** - Changes in admin panel reflect immediately on frontend  
✅ **Better Security** - Row Level Security (RLS) policies  

---

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager  
- Git account (for deploying)
- **Supabase account** (free tier available at https://supabase.com)

---

## Step-by-Step Setup

### Part 1: Frontend Setup

#### 1. Install Frontend Dependencies

```bash
cd app
npm install
```

✅ **Frontend is using Vite v7.2.4** (latest version)

---

### Part 2: Backend Setup with Supabase

#### 2.1 Create Supabase Account & Project

1. Go to https://supabase.com
2. Sign up for free account
3. Click "New Project"
4. Fill in:
   - **Name**: portfolio-backend
   - **Database Password**: Save this securely!
   - **Region**: Choose closest to you
5. Click "Create new project" (takes ~2 minutes)

#### 2.2 Get Supabase Credentials

1. In your Supabase project dashboard
2. Go to **Settings** → **API**
3. Copy these two values:
   - **Project URL** (e.g., `https://xyz.supabase.co`)
   - **Service Role Secret** (starts with `eyJ...`)

⚠️ **Important**: Use SERVICE_ROLE key, not anon key!

#### 2.3 Set Up Database Tables

1. In Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy entire content from `Backend/supabase-setup.sql`
4. Paste and click "Run"
5. You should see "Success. No rows returned"

✅ Database is now set up with all tables!

#### 2.4 Install Backend Dependencies

```bash
cd Backend
npm install
```

#### 2.5 Configure Environment Variables

```bash
cd Backend
cp .env.example .env
```

Edit `Backend/.env`:

```env
# REQUIRED - From your Supabase project
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...your-key-here

# REQUIRED - Admin password
ADMIN_PASSWORD=YourSecurePassword123!

# Optional - Email notifications
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Rate limiting
RATE_LIMIT_POINTS=10
RATE_LIMIT_DURATION=60

# Frontend URL
FRONTEND_URL=http://localhost:5173
```

---

### Part 3: Run Everything

You need **TWO terminals**:

#### Terminal 1 - Frontend:
```bash
cd app
npm run dev
```

✅ Running at: **http://localhost:5173**

#### Terminal 2 - Backend:
```bash
cd Backend
npm run dev
```

✅ Running at: **http://localhost:3000**

---

## Testing the Integration

### Test 1: Contact Form Submission

1. Open http://localhost:5173
2. Scroll to Contact section
3. Fill out form:
   - Name: Test User
   - Email: test@example.com
   - Message: Testing Supabase integration!
4. Click "Send Message"
5. Should see: "Thank you! Your message has been sent successfully." ✅

### Test 2: Admin Dashboard

1. Open http://localhost:3000
2. Enter password from `.env`
3. Click Login
4. You should see:
   - Messages tab with your test message ✅
   - Projects tab with sample projects ✅

### Test 3: Verify in Supabase

1. Go to Supabase dashboard
2. Click **Table Editor**
3. Select `messages` table
4. You should see your submitted message! ✅

---

## Managing Portfolio Data via Admin UI

### Adding New Projects

1. Login to admin dashboard
2. Click "Projects" tab
3. Click "Add Project" button
4. Fill in:
   - Title, Description
   - Technologies (comma-separated)
   - Project link
   - Icon (emoji)
   - Color gradient
5. Click Save
6. Refresh frontend to see new project!

### Managing Messages

1. Click "Messages" tab
2. View all contact form submissions
3. Mark as read/unread
4. Delete spam messages
5. Reply via email link

### Updating Personal Info

1. Click "Personal Info" tab
2. Update:
   - Name, title, bio
   - Email, phone
   - Location
3. Click Save
4. Changes reflect on frontend immediately!

---

## Moving Backend Folder Outside Root (Optional)

To move Backend folder outside `app` directory:

```bash
# From parent directory of app
mv app/Backend ../Backend
```

Then update paths in documentation. The Backend folder is self-contained and can be deployed separately.

---

## Deployment

### Deploy Frontend (Vercel)

1. Push `app` folder to GitHub
2. Import in Vercel
3. Deploy!

### Deploy Backend (Vercel)

1. Push `Backend` folder to separate GitHub repo
2. Import in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

⚠️ **Note**: For serverless deployment, Supabase works perfectly!

---

## Database Schema

### Tables Created:

1. **messages** - Contact form submissions
2. **projects** - Portfolio projects (CRUD enabled)
3. **experiences** - Work experience (CRUD enabled)
4. **skills** - Skill categories (CRUD enabled)
5. **personal_info** - Your personal details (single row)

All tables have:
- Row Level Security (RLS) policies
- Automatic timestamps
- Optimized indexes

---

## Security Features

### Backend Security:
✅ Supabase Row Level Security  
✅ Rate limiting (10 req/min)  
✅ Password authentication (bcrypt)  
✅ Input validation (Zod)  
✅ CORS protection  
✅ SQL injection prevention  

### Frontend Security:
✅ Content Security Policy  
✅ X-Frame-Options  
✅ X-Content-Type-Options  
✅ Input validation  
✅ XSS protection  

---

## Troubleshooting

### Issue: "Cannot connect to Supabase"

**Solution:**
1. Check SUPABASE_URL is correct (should end with `.supabase.co`)
2. Check SUPABASE_SERVICE_ROLE_KEY is complete
3. Ensure Supabase project is active

### Issue: "Table does not exist"

**Solution:**
1. Run the SQL setup script again in Supabase SQL Editor
2. Check Table Editor in Supabase to verify tables exist

### Issue: "Login fails with correct password"

**Solution:**
1. Make sure backend server is running
2. Check browser console for errors
3. Clear cookies and try again

### Issue: Contact form doesn't submit

**Solution:**
1. Ensure backend is running on port 3000
2. Check Network tab in browser DevTools
3. Verify SUPABASE credentials are correct

---

## Customization

### Change Admin Password

Edit `Backend/.env`:
```env
ADMIN_PASSWORD=NewPassword123!
```
Restart backend server.

### Update Portfolio Content

**Option 1**: Via Admin UI (Recommended)
- Login and use the dashboard

**Option 2**: Direct in Supabase
- Go to Table Editor
- Edit rows directly

**Option 3**: Update frontend data file
- Edit `src/data/portfolio.ts`
- Rebuild frontend

### Add Custom Styling

Admin dashboard uses Tailwind CSS:
- Edit `Backend/src/pages/index.tsx`
- Modify Tailwind classes

---

## API Endpoints

### Public Endpoints:
- `POST /api/contact` - Submit contact form
- `GET /api/projects` - Get all projects
- `GET /api/experiences` - Get all experiences
- `GET /api/skills` - Get all skills
- `GET /api/personal-info` - Get personal info

### Protected Endpoints (Require Auth):
- `GET /api/messages` - Get all messages
- `DELETE /api/messages/:id` - Delete message
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project
- Similar for experiences, skills, personal-info

---

## Latest Versions Used

### Frontend:
- **Vite**: ^7.2.4 ✅ (latest)
- **React**: ^19.2.0
- **TypeScript**: ~5.9.3
- **Tailwind CSS**: ^3.4.19
- **Framer Motion**: ^12.38.0

### Backend:
- **Next.js**: ^14.2.15 ✅ (latest stable)
- **Supabase**: ^2.45.0 ✅ (latest)
- **React**: ^18.3.1
- **TypeScript**: ^5.6.3

---

## Resources

- **Supabase Docs**: https://supabase.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vite Docs**: https://vitejs.dev/guide/
- **This Project's README**: See main README.md

---

## Support

Having issues? Check:
1. Browser console for errors
2. Terminal output for both servers
3. Supabase logs in dashboard
4. Documentation files in `/app` folder

---

## Next Steps

After setup:
1. ✅ Customize your portfolio content
2. ✅ Set up email notifications (optional)
3. ✅ Deploy to production
4. ✅ Set up custom domain
5. ✅ Enable HTTPS
6. ✅ Add analytics (optional)

**You're all set!** 🎉

Your portfolio is now running with:
- Modern frontend (Vite + React)
- Cloud backend (Next.js + Supabase)
- Real-time admin panel
- Full CRUD capabilities
- Latest versions of everything

Happy coding! 🚀
