# Professional Portfolio Website - Complete Setup Guide

## 🚀 Project Overview

A production-ready personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Inspired by modern design principles with smooth animations, responsive layout, and professional aesthetics.

**Live Demo:** https://your-portfolio.vercel.app

---

## 📋 Tech Stack

- **Frontend Framework:** React 19.2
- **Build Tool:** Vite 7.2
- **Styling:** Tailwind CSS 4.1
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Email:** EmailJS (for contact form)
- **Deployment:** Vercel

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Fixed/sticky navigation bar
│   ├── Hero.tsx            # Hero section with CTA
│   ├── About.tsx           # About/bio section
│   ├── Skills.tsx          # Skills showcase
│   ├── Projects.tsx        # Projects grid
│   ├── Contact.tsx         # Contact form + social links
│   └── Footer.tsx          # Footer section
├── App.tsx                 # Main app component
├── main.tsx                # Entry point
├── index.css               # Global styles & animations
└── utils/
    └── cn.ts               # Utility function for class names

public/
└── (static assets)

dist/
└── (built files)
```

---

## 🔧 Local Development Setup

### Prerequisites
- Node.js 16+ and npm installed
- Git for version control
- Code editor (VS Code recommended)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open `http://localhost:5173` in your browser

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 🎨 Customization Guide

### Update Personal Information

**1. Update the title in `index.html`**
```html
<title>Your Name - Full Stack Developer</title>
<meta name="description" content="Your custom description" />
```

**2. Update navbar branding in `src/components/Navbar.tsx`**
```tsx
<a href="#home" className="text-2xl font-bold gradient-text">
  YN  {/* Your initials */}
</a>
```

**3. Update hero section in `src/components/Hero.tsx`**
```tsx
<span className="gradient-text">Your Name</span>

<p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
  Your title | Building amazing digital experiences
</p>
```

**4. Update about section in `src/components/About.tsx`**
```tsx
<p className="text-gray-300 text-lg leading-relaxed">
  Your bio and professional information here...
</p>

// Update stats
[
  { label: 'Projects', value: 'X+' },
  { label: 'Experience', value: 'X yrs' },
  { label: 'Technologies', value: 'X+' },
]
```

**5. Update projects in `src/components/Projects.tsx`**
```tsx
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description',
    tech: ['Tech1', 'Tech2'],
    demo: 'https://demo-link.com',
    github: 'https://github.com/username/repo',
    image: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
  },
  // Add more projects
];
```

**6. Update contact info in `src/components/Contact.tsx`**
```tsx
const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'your-email@example.com',
    href: 'mailto:your-email@example.com',
  },
  // Update phone and location
];

// Update social links
const socialLinks = [
  { icon: SiGithub, label: 'GitHub', href: 'https://github.com/yourusername' },
  { icon: SiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
  { icon: BsTwitter, label: 'Twitter', href: 'https://twitter.com/yourhandle' },
];
```

**7. Update footer in `src/components/Footer.tsx`**
```tsx
<h3 className="text-2xl font-bold gradient-text mb-2">YN</h3> {/* Your initials */}
<p className="text-gray-400 text-sm">
  Your tagline here
</p>
```

---

## 📧 EmailJS Integration (Optional)

To enable the contact form to send emails:

### 1. Create EmailJS Account
- Go to [EmailJS](https://www.emailjs.com/)
- Sign up for free account
- Verify your email

### 2. Set Up Email Service
- In EmailJS dashboard, create an email service
- Add your email address as recipient
- Note your **Service ID**

### 3. Create Email Template
- Create a new template with variables:
  - `{{from_name}}` - Sender's name
  - `{{from_email}}` - Sender's email
  - `{{message}}` - Message content

- Note your **Template ID**

### 4. Get Public Key
- Go to Account settings
- Copy your **Public Key**

### 5. Update Contact Component
In `src/components/Contact.tsx`, uncomment and update:

```tsx
import emailjs from '@emailjs/browser';

// Initialize EmailJS (at component level)
useEffect(() => {
  emailjs.init('YOUR_PUBLIC_KEY');
}, []);

// In handleSubmit function, uncomment:
const response = await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'your-email@example.com',
  }
);
```

### 6. Store Secrets Safely
For production (Vercel), add environment variables:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

---

## 🎯 Design Customization

### Change Accent Color
The site uses **Cyan (rgb(6, 182, 212))** as the primary accent. To change:

1. **In CSS** (`src/index.css`):
```css
.gradient-text {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}
```

2. **In components**, update Tailwind classes:
```tsx
// Change from cyan-* to your-color-*
className="text-cyan-400"      → "text-blue-400"
className="bg-cyan-500"        → "bg-blue-500"
className="border-cyan-500/20" → "border-blue-500/20"
```

### Change Font
1. Update fonts in `tailwind.config.js`
2. Import from Google Fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

### Adjust Animation Speed
In component files, modify transition durations:
```tsx
transition={{ duration: 0.8 }}  // Change 0.8 to your preferred speed
```

---

## 🚀 Deployment to Vercel

### Method 1: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts** and connect your Git repository

### Method 2: GitHub Integration (Recommended)

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Import in Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"
   - Vercel auto-detects React + Vite settings
   - Click "Deploy"

3. **Configure Domain**
   - Go to project settings
   - Add custom domain
   - Update DNS records as instructed

### Add Environment Variables (for EmailJS)
1. In Vercel dashboard, go to Settings → Environment Variables
2. Add:
   ```
   VITE_EMAILJS_PUBLIC_KEY
   VITE_EMAILJS_SERVICE_ID
   VITE_EMAILJS_TEMPLATE_ID
   ```

---

## ✅ Pre-Launch Checklist

- [ ] All personal information updated
- [ ] Projects page populated with real projects
- [ ] Contact form tested (with or without EmailJS)
- [ ] Social media links added
- [ ] Images/screenshots optimized
- [ ] Mobile responsiveness tested (use DevTools)
- [ ] Lighthouse performance checked
- [ ] Custom domain configured
- [ ] Meta tags updated for SEO
- [ ] Analytics setup (Google Analytics optional)

---

## 🔍 SEO Optimization

### Meta Tags
Update in `index.html`:
```html
<title>Your Name - Full Stack Developer | React | Node.js</title>
<meta name="description" content="Full Stack Developer specializing in React, Node.js, and Tailwind CSS. Building beautiful web experiences.">
<meta name="keywords" content="developer, full stack, react, nodejs, web development">
<meta name="author" content="Your Name">
<meta name="theme-color" content="#0f172a">
```

### Structured Data (Schema)
Add JSON-LD to `src/components/Hero.tsx`:
```tsx
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Full Stack Developer",
  "email": "your-email@example.com",
  "sameAs": [
    "https://github.com/yourusername",
    "https://linkedin.com/in/yourprofile"
  ]
}
</script>
```

---

## 📊 Performance Tips

1. **Image Optimization**
   - Use optimized image sizes
   - Consider using WebP format
   - Use lazy loading for images

2. **Code Splitting**
   - Vite handles this automatically
   - Check bundle size: `npm run build`

3. **Caching**
   - Vercel handles caching automatically
   - Configure headers in `vercel.json` if needed

4. **Lighthouse Score Target**
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 90+
   - SEO: 100

---

## 🐛 Troubleshooting

### Issue: Build fails
- Clear node_modules: `rm -rf node_modules`
- Reinstall: `npm install`
- Check Node version: `node --version` (should be 16+)

### Issue: Styles not applying
- Clear Tailwind cache: `rm -rf .next` or restart dev server
- Check Tailwind config in `tailwind.config.js`

### Issue: Animations not smooth
- Check browser hardware acceleration
- Reduce animation complexity if on low-end devices
- Test in different browsers

### Issue: Contact form not working
- Check EmailJS credentials
- Test in different email provider
- Check browser console for errors

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [React Icons](https://react-icons.github.io/react-icons)
- [EmailJS Docs](https://www.emailjs.com/docs)
- [Vercel Deployment](https://vercel.com/docs)

---

## 💡 Tips for Success

1. **Keep it fresh** - Update projects and content regularly
2. **Add personality** - Use your own photos and stories
3. **Mobile first** - Always test on mobile devices
4. **Performance matters** - Keep bundle size small
5. **Accessibility** - Use semantic HTML and ARIA labels
6. **Test everything** - Forms, links, animations
7. **Monitor analytics** - Track visitor behavior
8. **Iterate often** - Gather feedback and improve

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🤝 Support

Need help? Check out:
- GitHub Issues in the repository
- React community forums
- Tailwind CSS Discord community
- Stack Overflow tags: react, vite, tailwindcss

---

**Built with ❤️ using React, Vite, Tailwind CSS, and Framer Motion**

Happy coding! 🚀
