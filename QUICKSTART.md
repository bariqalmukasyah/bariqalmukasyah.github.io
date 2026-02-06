# Quick Start Guide

## Welcome! 👋

Your Next.js landing page is ready. Follow these steps to get started.

## 1. View Your Site

Your site is currently running at: **http://localhost:3000**

## 2. Add Your Images (Optional)

Add your images to the `public/` folder:

1. **Profile Photo**: Save as `public/profile.jpg`
   - Recommended size: 500x500px
   - Should be a square image
   - Used in the hero section

2. **Logo**: Save as `public/BITS-transparant.jpg`
   - Recommended size: 200x200px
   - Used in the navbar

*If you skip this, the site will show fallback initials (MB)*

## 3. Customize Your Content

### Quick Edit - All in One Place

Open `lib/config.ts` and update:
- Personal name, title, phone, email
- Social links
- Services descriptions
- Work experiences
- Skills list

### Or Edit Components Directly

**Navbar**: `components/Navbar.tsx`
**Hero Section**: `components/HeroSection.tsx`
**Services**: `components/ServicesSection.tsx`
**Experience**: `components/ExperienceSection.tsx`
**Skills**: `components/SkillsSection.tsx`
**Footer**: `components/Footer.tsx`

## 4. Test Your Changes

Changes are **hot-reloaded** - save a file and see changes immediately in your browser.

## 5. Build for Production

```bash
npm run build
```

This creates an optimized production build.

## 6. Deploy to the Web

### Option A: Vercel (Recommended, 2 minutes)

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Deploy landing page"
   git push
   ```

2. Go to https://vercel.com/new
3. Click "Import Git Repository"
4. Select your repository
5. Click "Deploy"

**That's it!** Your site is live.

### Option B: GitHub Pages (Free)

1. Update `next.config.ts` to add: `output: "export"`
2. Run: `npm run build`
3. Push the `out/` folder to GitHub Pages

See `DEPLOYMENT.md` for detailed instructions.

## 7. Add Your Domain (Optional)

Once deployed, you can add your custom domain in your hosting platform settings.

## Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Clear all caches and reinstall
rm -rf .next node_modules && npm install
```

## File Structure

```
├── app/
│   ├── page.tsx          # Main page
│   ├── layout.tsx        # Layout with metadata
│   └── globals.css       # Global styles
├── components/           # Reusable components
├── lib/
│   └── config.ts         # Configuration file
├── public/               # Images go here
└── package.json          # Dependencies
```

## Common Tasks

### Change Colors

Edit `tailwind.config.ts` or look for `bg-blue-600`, `text-blue-500` in components and change the color numbers.

Common Tailwind colors: slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, blue, indigo, violet, purple, fuchsia, pink, rose.

### Add a New Section

1. Create file: `components/NewSection.tsx`
2. Import in: `app/page.tsx`
3. Add to page: `<NewSection />`

### Change Fonts

Currently using "Inter" font from Google Fonts. To change:

1. Edit `app/layout.tsx`
2. Import different font from `next/font/google`
3. Add to body className

### Add Contact Form

You can integrate with services like:
- Formspree: https://formspree.io
- EmailJS: https://www.emailjs.com
- Netlify Forms: https://www.netlify.com/products/forms/

## Getting Help

1. **Check the docs**:
   - `README.md` - Full documentation
   - `DEPLOYMENT.md` - Deployment guide
   - `PROJECT_SUMMARY.md` - What was created

2. **Component files** have comments explaining the code

3. **Tailwind CSS**: https://tailwindcss.com/docs
   - Search for any design/styling questions

4. **Next.js**: https://nextjs.org/docs
   - Search for framework-related questions

## Troubleshooting

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**Changes not showing?**
- Hard refresh browser: `Ctrl+Shift+R` (or `Cmd+Shift+R`)
- Check browser console for errors

**Build fails?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

## You're All Set! 🎉

Your professional landing page is ready to go. Make it yours!

Next steps:
1. ✅ Add your images
2. ✅ Customize content
3. ✅ Test on mobile
4. ✅ Deploy to web
5. ✅ Share with the world

---

**Need more help?** Open the documentation files in this folder. Everything is documented! 📚
