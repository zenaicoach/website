### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/zenaicoach/website.git
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

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