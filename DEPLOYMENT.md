# Deployment Guide

## Option 1: Deploy to Vercel (Recommended) ⭐

Vercel is the official hosting platform for Next.js and offers the best experience.

### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Sign up on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign up" and choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub

3. **Import Project**
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

4. **Configure Project**
   - Framework Preset: Next.js (auto-selected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Click "Deploy"

5. **Custom Domain (Optional)**
   - Go to project Settings → Domains
   - Add your custom domain
   - Follow DNS instructions

## Option 2: Deploy to GitHub Pages

GitHub Pages can host static Next.js sites.

### Steps:

1. **Export as Static Site**
   
   Update `next.config.ts`:
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: "export",
     images: {
       unoptimized: true,
     },
   };

   export default nextConfig;
   ```

2. **Build and Deploy**
   ```bash
   npm run build
   ```

3. **Push to GitHub**
   - The `out/` folder contains your static site
   - Push to the `gh-pages` branch or configure GitHub Pages in settings

## Option 3: Deploy to Netlify

### Steps:

1. **Sign up on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Connect Repository**
   - Click "New site from Git"
   - Select your repository
   - Choose GitHub

3. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Deploy**
   - Click "Deploy site"

## Option 4: Deploy to Docker

### Dockerfile:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
```

### Build and Run:
```bash
docker build -t bariq-portfolio .
docker run -p 3000:3000 bariq-portfolio
```

## Domain Setup

### Using Custom Domain with Vercel:

1. Go to project Settings → Domains
2. Enter your custom domain
3. Update DNS records at your domain registrar:
   - Add CNAME record pointing to your Vercel URL
   - Follow Vercel's DNS instructions

### Using Custom Domain with GitHub Pages:

1. Add `CNAME` file to public folder:
   ```
   yourdomain.com
   ```

2. Update GitHub repository settings:
   - Settings → Pages
   - Select source branch (main or gh-pages)
   - Add custom domain

## Environment Variables

Create `.env.local` for local development:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, set variables in your hosting platform's settings.

## Performance Tips

1. **Image Optimization**
   - Use Next.js Image component
   - Compress images before uploading
   - Use WebP format when possible

2. **Build Size**
   - Remove unused dependencies
   - Use dynamic imports for large components
   - Analyze bundle: `npm run build` shows sizes

3. **SEO**
   - Metadata already configured in `layout.tsx`
   - Update Open Graph images
   - Use semantic HTML

## Monitoring & Analytics

### Add Google Analytics:

1. Create account on [Google Analytics](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `app/layout.tsx`:
   ```tsx
   import { Analytics } from "@vercel/analytics/react";
   
   <Analytics />
   ```

### Add Vercel Analytics:

Install package:
```bash
npm install @vercel/analytics
```

Add to `app/page.tsx`:
```tsx
import { Analytics } from "@vercel/analytics/react";

<Analytics />
```

## Troubleshooting

### Build Fails
- Clear cache: `rm -rf .next node_modules && npm install`
- Check Node version: Should be 16+
- Review error logs in deployment platform

### Slow Performance
- Check image sizes in Network tab
- Use Lighthouse audit (Chrome DevTools)
- Enable caching in next.config.ts

### DNS Issues
- Wait 24-48 hours for DNS propagation
- Clear browser cache
- Use `nslookup` to verify DNS: `nslookup yourdomain.com`

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Pages**: https://pages.github.com
- **Netlify Docs**: https://docs.netlify.com
