# Muhammad Bariq Al Mukasyah - Landing Page

A modern, responsive landing page for Muhammad Bariq Al Mukasyah, IT Infrastructure Specialist, built with Next.js, React, and Tailwind CSS.

## Features

✨ **Modern Design**
- Responsive layout that works on all devices
- Smooth animations with AOS (Animate On Scroll)
- Beautiful gradient backgrounds and glassmorphism effects

🎯 **Sections**
- **Hero Section** - Engaging introduction with call-to-action buttons
- **Services** - Showcase of 5 core IT services
- **Experience** - Professional timeline of work history
- **Skills** - Scrollable skills carousel
- **Footer** - Contact information and social links

📱 **Mobile-Friendly**
- Mobile navigation menu
- Touch-optimized buttons and interactions
- Responsive typography and spacing

🎨 **Customizable**
- Easy-to-modify component structure
- Tailwind CSS for quick styling changes
- Centralized data configuration

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 3
- **Icons**: lucide-react
- **Animations**: AOS (Animate On Scroll)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bariqalmukasyah/bariqalmukasyah.github.io.git
cd bariqalmukasyah.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main page component
│   └── globals.css       # Global styles
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── HeroSection.tsx   # Hero section
│   ├── ServicesSection.tsx # Services showcase
│   ├── ExperienceSection.tsx # Work experience timeline
│   ├── SkillsSection.tsx  # Skills carousel
│   └── Footer.tsx        # Footer with contact info
├── public/               # Static files (images, etc)
├── package.json
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## Customization

### Update Personal Information

Edit the `personalInfo` objects in each component to customize:
- Name, title, and contact details
- Service descriptions
- Work experience
- Skills list

### Add Images

Place your images in the `public/` directory:
- `public/profile.jpg` - Profile picture for hero section
- `public/BITS-transparant.jpg` - Logo for navbar

### Modify Colors

Update the Tailwind configuration in `tailwind.config.ts` or use Tailwind classes directly in components.

### Add More Sections

Create new components in the `components/` directory and import them in `app/page.tsx`.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Deploy to GitHub Pages

```bash
npm run build
```

Then configure your GitHub repository settings to deploy from the `out/` directory.

## Contact

- **Email**: b@riq.web.id
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/6285156960832)
- **LinkedIn**: [linkedin.com/in/bariqalmukasyah](https://www.linkedin.com/in/bariqalmukasyah)
- **GitHub**: [github.com/bariqalmukasyah](https://bariqalmukasyah.github.io)

## License

This project is open source and available under the MIT License.

## Credits

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [lucide-react](https://lucide.dev/)
- Animations with [AOS](https://michalsnik.github.io/aos/)
