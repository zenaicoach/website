# Zen AI Coach Website

A modern, responsive website for Zen AI Coach - the first AI life coach for human flourishing.

## 🚀 Zero-Code Development

This website is optimized for **zero-code modifications** using Cursor. All content is stored directly in component files for easy editing.

### Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Make changes directly in component files**
4. **See changes instantly in your browser**

## 📁 Project Structure

```
src/
├── components/          # All website sections
│   ├── Header.astro    # Navigation & logo
│   ├── Hero.astro      # Main headline & CTA buttons
│   ├── Problem.astro   # "The Silent Pandemic" section
│   ├── Opportunity.astro # Market opportunity
│   ├── MissionFirst.astro # Mission statement
│   ├── ZenAICoach.astro # Product description
│   ├── HowItWorks.astro # Features & benefits
│   ├── Vision.astro    # Vision statement
│   ├── EmpowerBillions.astro # Target audience
│   ├── GetInvolved.astro # Call-to-action cards
│   ├── Developers.astro # Developer recruitment
│   ├── EarlyAccess.astro # Waitlist form
│   ├── FAQ.astro       # Frequently asked questions
│   ├── Footer.astro    # Footer links & contact
│   └── BackToTop.astro # Back to top button
├── layouts/
│   └── Layout.astro    # Page layout & meta tags
└── pages/
    └── index.astro     # Main page (assembles all components)
```

## 🎯 Common Modifications

### Change Main Headline
**File:** `src/components/Hero.astro`
**Look for:** `<h1 class="text-4xl md:text-5xl...">`

### Update Navigation Links
**File:** `src/components/Header.astro`
**Look for:** `<nav class="hidden md:flex...">`

### Modify Contact Information
**File:** `src/components/Footer.astro`
**Look for:** Contact details and links

### Update CTA Buttons
**File:** `src/components/Hero.astro` (main buttons)
**File:** `src/components/GetInvolved.astro` (section buttons)

### Change Company Information
**File:** `src/layouts/Layout.astro` (page title, meta description)
**File:** `src/components/Header.astro` (logo text)

## 🎨 Styling

- **Colors:** Use Tailwind CSS classes (e.g., `text-slate-900`, `bg-accent`)
- **Spacing:** Use Tailwind spacing classes (e.g., `mt-8`, `py-20`)
- **Typography:** Use Tailwind text classes (e.g., `text-4xl`, `font-bold`)

## 🔧 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📝 Content Guidelines

1. **Keep it concise** - Short, impactful text works better
2. **Use clear CTAs** - Action-oriented button text
3. **Maintain hierarchy** - Use proper heading levels (h1, h2, h3)
4. **Mobile-first** - Content should work on all screen sizes

## 🚨 Important Notes

- **No JSON files** - All content is directly in components
- **No build step needed** - Changes appear instantly in dev mode
- **Responsive design** - All components work on mobile and desktop
- **SEO optimized** - Meta tags in Layout.astro

## 🆘 Need Help?

1. **Check the browser** - Always preview changes
2. **Look at similar components** - Copy patterns from existing sections
3. **Use browser dev tools** - Inspect elements for styling
4. **Restart dev server** - If changes don't appear: `npm run dev`

## Deployment

### GitHub Pages

This website is configured for automatic deployment to GitHub Pages.

1. **Automatic Deployment**: The site automatically deploys when you push to the `main` branch
2. **Manual Setup** (if needed):
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Set source to "GitHub Actions"
   - The site will be available at `https://zenaicoach.github.io/website/`

### Other Platforms

The built site is static and can be deployed to any static hosting platform. Just ensure to update the `base` path in `astro.config.mjs` accordingly.

## Customization

### Colors

The primary accent color is defined in `tailwind.config.mjs` and can be customized by modifying the `accent` color value.

### Content

All content is contained within the individual component files in `src/components/`. Edit these files to modify the website content.

### Styling

The website uses Tailwind CSS for styling. Custom styles are defined in the `Layout.astro` file.

## License

This project is licensed under the MIT License.