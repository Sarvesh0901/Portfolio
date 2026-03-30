# 📋 Quick Reference - Portfolio v2.0

## Essential Commands

### Frontend (app/)
```bash
npm install          # Install dependencies
npm run dev          # Development server (port 5173)
npm run build        # Production build
npm run preview      # Preview build
```

### Backend (Backend/)
```bash
npm install          # Install dependencies
npm run dev          # Development server (port 3000)
npm run build        # Production build
npm start            # Start production server
```

---

## URLs

| Service | URL | Purpose |
|---------|-----|---------|
| **Frontend** | http://localhost:5173 | Main portfolio site |
| **Backend Admin** | http://localhost:3000 | Admin dashboard |
| **Supabase** | https://supabase.com | Database management |

---

## Environment Variables (Required)

### Backend/.env
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...your-key
ADMIN_PASSWORD=YourPassword123!
```

---

## File Locations

### Supabase Setup
`Backend/supabase-setup.sql` - Run this in Supabase SQL Editor

### Admin Dashboard
`Backend/src/pages/index.tsx` - Main admin UI

### Contact Form Integration
`src/sections/Contact.tsx` - Frontend form
`Backend/src/pages/api/contact.ts` - Backend API

### Database Client
`Backend/src/lib/supabase.ts` - Supabase operations

---

## Testing Checklist

- [ ] Frontend running on port 5173
- [ ] Backend running on port 3000
- [ ] Supabase project created
- [ ] SQL setup script executed
- [ ] .env file configured
- [ ] Test message submitted
- [ ] Message visible in admin dashboard
- [ ] Message visible in Supabase table

---

## Common Issues & Quick Fixes

### "Cannot connect to Supabase"
→ Check SUPABASE_URL and SERVICE_ROLE_KEY in .env

### "Table does not exist"
→ Run supabase-setup.sql in Supabase SQL Editor

### "Port already in use"
→ Kill process: `lsof -ti:3000 | xargs kill -9`

### Login fails
→ Verify ADMIN_PASSWORD in .env matches what you're typing

---

## Tech Stack

### Frontend
- Vite v7.2.4 ⚡
- React v19.2.0 ⚛️
- TypeScript v5.9.3
- Tailwind CSS v3.4.19
- Framer Motion v12.38.0

### Backend
- Next.js v14.2.15
- Supabase v2.45.0 ☁️
- TypeScript v5.6.3
- Zod validation

---

## Documentation Files

1. **SETUP_SUPABASE.md** - Complete setup guide
2. **UPGRADE_SUMMARY_v2.md** - What's new in v2.0
3. **README.md** - Main documentation
4. **RUNNING_INSTRUCTIONS.md** - Quick start

---

## Getting Supabase Credentials

1. Go to https://supabase.com
2. Select your project
3. Settings → API
4. Copy:
   - Project URL
   - Service Role Secret

⚠️ Use SERVICE_ROLE, not anon key!

---

## Deployment Checklist

### Frontend (Vercel)
- [ ] Push to GitHub
- [ ] Import in Vercel
- [ ] Deploy automatically

### Backend (Vercel)
- [ ] Push Backend folder to GitHub
- [ ] Import in Vercel
- [ ] Add environment variables
- [ ] Redeploy if needed

---

## Support Resources

- Supabase Docs: https://supabase.com/docs
- Next.js Docs: https://nextjs.org/docs
- Vite Docs: https://vitejs.dev/guide
- Discord: https://discord.supabase.com

---

**Quick Start**: See SETUP_SUPABASE.md for detailed instructions.
