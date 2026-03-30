# Quick Setup Guide

This guide will help you get both frontend and backend running in minutes.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Step-by-Step Setup

### 1. Install Frontend Dependencies

```bash
cd app
npm install
```

### 2. Install Backend Dependencies

```bash
cd Backend
npm install
```

**If you encounter errors**, ensure you're using Node.js 18+. Check version:
```bash
node --version
```

### 3. Configure Backend Environment

```bash
cd Backend
cp .env.example .env
```

Edit `Backend/.env` and set a secure password:

```env
ADMIN_PASSWORD=YourSecurePassword123!
DATABASE_PATH=./database.db
RATE_LIMIT_POINTS=10
RATE_LIMIT_DURATION=60
FRONTEND_URL=http://localhost:5173
```

### 4. Start Both Servers

**Terminal 1 - Frontend:**
```bash
cd app
npm run dev
```

Frontend will be available at: `http://localhost:5173`

**Terminal 2 - Backend:**
```bash
cd app/Backend
npm run dev
```

Backend will be available at: `http://localhost:3000`

### 5. Test the Integration

1. Open `http://localhost:5173` in your browser
2. Navigate to the Contact section
3. Fill out and submit the contact form
4. The message should be stored in the backend database

### 6. Access Admin Dashboard

1. Open `http://localhost:3000` in your browser
2. Enter the password you set in `.env`
3. You should see the message you just submitted!

## Common Issues & Solutions

### Issue: "Cannot find module 'better-sqlite3'"

**Solution:** Make sure you ran `npm install` in the Backend folder.

```bash
cd Backend
npm install
```

### Issue: "Port 3000 already in use"

**Solution:** Either stop the process using port 3000 or change the port:

```bash
# On Windows (PowerShell)
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process

# On Linux/Mac
lsof -ti:3000 | xargs kill -9
```

Or update `package.json` in Backend:
```json
"scripts": {
  "dev": "next dev -p 3001"
}
```

### Issue: Contact form submission fails

**Solution:** 
1. Ensure backend is running on port 3000
2. Check browser console for errors
3. Verify CORS settings in backend

Update `Backend/src/pages/api/contact.ts` if needed:
```typescript
// Add CORS headers
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
res.setHeader('Access-Control-Allow-Methods', 'POST');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
```

### Issue: Database file not created

**Solution:** The database is created automatically on first API call. If it doesn't exist:

1. Check file permissions in Backend folder
2. Manually create the database:

```bash
cd Backend
sqlite3 database.db ".quit"
```

### Issue: Admin login fails

**Solution:**
1. Verify `ADMIN_PASSWORD` is set correctly in `.env`
2. Try a simpler password (no special characters initially)
3. Check browser cookies are enabled

## Development Workflow

### Making Changes

1. **Frontend changes**: Edit files in `src/`, Vite will hot-reload automatically
2. **Backend changes**: Edit files in `Backend/src/`, Next.js will reload automatically

### Adding New Features

**Frontend:**
- Add new sections in `src/sections/`
- Update data in `src/data/portfolio.ts`
- Modify styles with Tailwind classes

**Backend:**
- Add new API routes in `Backend/src/pages/api/`
- Update database schema in `Backend/src/lib/db.ts`
- Add validation schemas in `Backend/src/lib/validation.ts`

## Production Build

### Frontend

```bash
cd app
npm run build
npm run preview
```

### Backend

```bash
cd Backend
npm run build
npm start
```

## Next Steps

1. ✅ Customize your portfolio content in `src/data/portfolio.ts`
2. ✅ Set up email notifications (optional) in Backend
3. ✅ Deploy to production (Vercel, Netlify, etc.)
4. ✅ Set up a custom domain
5. ✅ Enable HTTPS for production

## Additional Resources

- [Frontend Documentation](./README.md)
- [Backend Documentation](./Backend/README.md)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Next.js Docs](https://nextjs.org/docs)

## Support

If you encounter any issues not covered here:

1. Check the browser console for errors
2. Check the terminal output for both servers
3. Review the documentation files
4. Search for similar issues online

Happy coding! 🚀
