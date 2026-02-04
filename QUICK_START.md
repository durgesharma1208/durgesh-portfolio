# 🎯 Quick Start Guide - 5 Minutes to Launch

## Step 1: Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser

## Step 2: Quick Customization (5 files to edit)

### File 1: `index.html` - Update title
```html
<title>Your Name - Full Stack Developer</title>
<meta name="description" content="Your description here" />
```

### File 2: `src/components/Navbar.tsx` - Your initials
```tsx
<a href="#home" className="text-2xl font-bold gradient-text">
  YN  {/* Change to your initials */}
</a>
```

### File 3: `src/components/Hero.tsx` - Name and role
```tsx
<span className="gradient-text">Your Name</span>

<p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
  Your Role | Your Tagline
</p>
```

### File 4: `src/components/Contact.tsx` - Contact info
```tsx
const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'your-email@example.com',
    href: 'mailto:your-email@example.com',
  },
];

const socialLinks = [
  { icon: SiGithub, label: 'GitHub', href: 'https://github.com/yourname' },
  { icon: SiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/yourname' },
];
```

### File 5: `src/components/Projects.tsx` - Add your projects
```tsx
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'What this project does...',
    tech: ['React', 'Tailwind', 'Node.js'],
    demo: 'https://your-demo.com',
    github: 'https://github.com/yourname/project',
    image: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
  },
];
```

## Step 3: Build for Production
```bash
npm run build
```

## Step 4: Deploy to Vercel

### Option A: Using Vercel Dashboard (Easiest)
1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourname/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy" - Done! ✅

### Option B: Using Vercel CLI
```bash
npm install -g vercel
vercel
```

## Step 5: Custom Domain
1. Go to your project on Vercel
2. Settings → Domains
3. Add your custom domain
4. Update DNS records (Vercel provides instructions)

---

## 📧 Contact Form Setup (Optional)

If you want the contact form to send emails:

1. **Create free EmailJS account:**
   - Go to [emailjs.com](https://www.emailjs.com/)
   - Sign up and verify email

2. **Set up email service:**
   - Create email service
   - Add your email as recipient
   - Save **Service ID**

3. **Create email template:**
   - Create template with placeholders:
     - `{{from_name}}`
     - `{{from_email}}`
     - `{{message}}`
   - Save **Template ID**

4. **Get your keys:**
   - Account → API Keys
   - Copy **Public Key**

5. **Add to Contact Form:**
   In `src/components/Contact.tsx`, uncomment the EmailJS code and add your keys:
   ```tsx
   import emailjs from '@emailjs/browser';

   useEffect(() => {
     emailjs.init('YOUR_PUBLIC_KEY');
   }, []);

   const response = await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     {
       from_name: formData.name,
       from_email: formData.email,
       message: formData.message,
     }
   );
   ```

---

## 🎨 Change Theme Colors

The site uses **Cyan** as the accent color. To change to another color:

### Search and replace in all components:
- `cyan-400` → `blue-400` (or your color)
- `cyan-500` → `blue-500`
- `cyan-500/20` → `blue-500/20`
- `cyan-500/30` → `blue-500/30`

Or update the gradient in `src/index.css`:
```css
.gradient-text {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}
```

---

## ✅ Pre-Launch Checklist

- [ ] Updated all personal information
- [ ] Added your projects (at least 3)
- [ ] Updated contact info and social links
- [ ] Tested on mobile devices
- [ ] Built successfully: `npm run build`
- [ ] Deployed to Vercel
- [ ] Custom domain added
- [ ] Contact form tested (if using EmailJS)

---

## 📱 Testing

### Test locally
```bash
npm run dev
# Visit http://localhost:5173
```

### Test responsiveness
- Use Chrome DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Test on mobile, tablet, desktop

### Test performance
```bash
npm run build
# Check bundle size in console output
```

---

## 🚀 Common Tasks

### Add a new skill
Edit `src/components/Skills.tsx` - Add to the skills array:
```tsx
{
  title: 'Your Skill',
  icon: SiYourIcon,
  color: 'text-your-color-400'
}
```

### Change animation speed
Find `transition={{ duration: 0.8 }}` and change the number:
- Smaller = faster (0.3)
- Larger = slower (1.2)

### Add more projects
Edit `src/components/Projects.tsx` and add to the projects array

### Update about section
Edit `src/components/About.tsx` - Update bio, stats, and highlights

---

## 🆘 Troubleshooting

### Build fails
```bash
rm -rf node_modules
npm install
npm run build
```

### Dev server won't start
- Check if port 5173 is available
- Kill process: `lsof -ti:5173 | xargs kill -9`
- Try: `npm run dev`

### Styles not updating
- Restart dev server
- Clear browser cache (Ctrl+Shift+Delete)

### Deploy fails on Vercel
- Check build logs in Vercel dashboard
- Make sure `package.json` is up to date
- Verify Node version: `node --version`

---

## 📚 Helpful Links

- **React:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Framer Motion:** https://www.framer.com/motion
- **Vercel Docs:** https://vercel.com/docs
- **EmailJS Docs:** https://www.emailjs.com/docs

---

## 🎓 Next Steps After Launch

1. Share on LinkedIn with your projects
2. Add link to resume/CV
3. Share on Twitter/GitHub
4. Monitor with Google Analytics (optional)
5. Update projects as you build more
6. Gather feedback and iterate

---

**That's it! Your professional portfolio is live! 🎉**

Need detailed setup? Check [PORTFOLIO_SETUP.md](./PORTFOLIO_SETUP.md)
