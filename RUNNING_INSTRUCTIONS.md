# 🚀 Installation & Running Instructions

## Quick Start (5 Minutes)

### Step 1: Install Dependencies

Open a terminal in the `app` directory:

```bash
npm install
```

Then install backend dependencies:

```bash
cd Backend
npm install
cd ..
```

### Step 2: Configure Backend

Copy the environment template:

```bash
cd Backend
copy .env.example .env    # Windows PowerShell
# OR
cp .env.example .env      # Linux/Mac
```

**IMPORTANT**: Edit `Backend/.env` and set your admin password:

```env
ADMIN_PASSWORD=YourSecurePassword123
```

### Step 3: Run Both Servers

You need **TWO separate terminals**:

**Terminal 1 - Frontend:**
```bash
npm run dev
```
✅ Frontend running at: **http://localhost:5173**

**Terminal 2 - Backend:**
```bash
cd Backend
npm run dev
```
✅ Backend running at: **http://localhost:3000**

### Step 4: Test Everything Works

1. Open browser to http://localhost:5173
2. Scroll to Contact section
3. Fill out the form with a test message
4. Submit the form
5. Go to http://localhost:3000 (Admin Dashboard)
6. Login with your password
7. You should see your message! 🎉

---

## Detailed Setup

### Prerequisites Checklist

- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] A code editor (VS Code recommended)
- [ ] Modern web browser (Chrome, Firefox, Edge)

### System Requirements

- **RAM**: 4GB minimum, 8GB recommended
- **Disk Space**: ~500MB for dependencies
- **OS**: Windows 10+, macOS 10.15+, Linux

### Troubleshooting Installation

#### Error: "Cannot find module"

**Solution**: Make sure you're in the correct directory and run:

```bash
# For frontend
cd app
npm install

# For backend
cd app/Backend
npm install
```

#### Error: "Port already in use"

**Windows Solution:**
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual number)
taskkill /PID <PID> /F
```

**Linux/Mac Solution:**
```bash
# Find and kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

#### Error: "Permission denied" when creating database

**Solution**: Check folder permissions or run as administrator once to create the database file.

---

## Development Commands

### Frontend (app/)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

### Backend (app/Backend/)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Project Structure Overview

```
app/
├── src/                    # Frontend source code
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx        # Homepage hero section
│   │   ├── Contact.tsx     # Contact form (→ backend)
│   │   └── ...
│   ├── data/
│   │   └── portfolio.ts    # Your personal info
│   └── ...
├── Backend/                # Backend application
│   ├── src/
│   │   ├── pages/api/      # API endpoints
│   │   │   ├── contact.ts  # Handles form submissions
│   │   │   └── auth/       # Login/logout
│   │   └── pages/
│   │       └── index.tsx   # Admin dashboard
│   └── database.db         # SQLite database (auto-created)
└── ...
```

---

## Customization Guide

### Update Your Information

Edit `src/data/portfolio.ts`:

```typescript
export const portfolioData = {
  personal: {
    name: 'Your Name',          // ← Change this
    title: 'Your Title',        // ← Change this
    bio: 'Your bio...',         // ← Change this
    email: 'your@email.com',    // ← Change this
    // ... rest of fields
  },
};
```

### Change Admin Password

Edit `Backend/.env`:

```env
ADMIN_PASSWORD=NewPassword123
```

Restart the backend after changing.

### Modify Colors

Edit `tailwind.config.js` to change the color scheme.

---

## Testing the Integration

### Test 1: Contact Form Submission

1. Start both servers
2. Go to http://localhost:5173/contact
3. Fill form:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message
4. Click "Send Message"
5. Should see success notification ✅

### Test 2: Admin Dashboard

1. Go to http://localhost:3000
2. Enter password from `.env`
3. Click Login
4. Should see your test message ✅

### Test 3: Database Verification

Check if database was created:

```bash
ls Backend/database.db
```

View database contents (optional):

```bash
sqlite3 Backend/database.db "SELECT * FROM messages;"
```

---

## Common Questions

### Q: Do I need both servers running?

**A**: Yes! The frontend needs the backend API to submit contact forms.

### Q: Can I use a different port?

**A**: Yes! Update in:
- Frontend: `vite.config.ts`
- Backend: `Backend/package.json` scripts

### Q: Is the database persistent?

**A**: Yes! Messages are stored in `Backend/database.db` and persist between restarts.

### Q: Can I deploy this?

**A**: Absolutely! See deployment sections in README.md files.

### Q: How do I add email notifications?

**A**: Uncomment the email code in `Backend/src/pages/api/contact.ts` and configure SMTP in `.env`.

---

## Next Steps After Installation

1. ✅ **Verify everything works** - Test contact form and admin dashboard
2. ✅ **Customize content** - Update your info in `src/data/portfolio.ts`
3. ✅ **Set secure password** - Change ADMIN_PASSWORD in `.env`
4. ✅ **Test on different devices** - Check responsive design
5. ✅ **Review security settings** - Adjust rate limiting if needed
6. ✅ **Plan deployment** - Choose hosting (Vercel, Netlify, etc.)

---

## Support Resources

- **Frontend Docs**: `README.md`
- **Backend Docs**: `Backend/README.md`
- **Setup Guide**: `SETUP.md`
- **Implementation Summary**: `IMPLEMENTATION_SUMMARY.md`

---

## Success Checklist

After installation, you should have:

- [ ] Frontend running at http://localhost:5173
- [ ] Backend running at http://localhost:3000
- [ ] Database file created at `Backend/database.db`
- [ ] Successfully submitted a test message
- [ ] Accessed admin dashboard
- [ ] Updated your personal information
- [ ] Changed the admin password

**All checked?** 🎉 You're ready to go!

---

## Performance Tips

### Development
- Keep both terminals open
- Use hot-reload (automatic on save)
- Clear browser cache if styles don't update

### Production Build
```bash
# Frontend
npm run build
npm run preview

# Backend
cd Backend
npm run build
npm start
```

---

Happy coding! 🚀

If you encounter any issues not covered here, check the console logs in both terminals and browser DevTools.
