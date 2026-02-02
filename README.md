# Bogdan Bîrsăștean - Portfolio

A modern, responsive portfolio website built with React 19, TypeScript, and Tailwind CSS v4.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React 19** - Latest React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling with CSS-first configuration
- **Vite** - Fast build tool and dev server

## 📁 Project Structure

```
portfolio-bogdan/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.tsx          # Main application component
│   ├── index.css        # Tailwind CSS configuration
│   └── main.tsx         # React entry point
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## ✏️ Customization

### Update Your Information

Edit `src/App.tsx` to modify:

- **PROJECTS** array - Add/edit your projects
- **EXPERIENCE** array - Update work history
- **SKILLS** object - Adjust your tech stack
- Contact links in the `Contact` component

### Styling

The color scheme and fonts are defined in `src/index.css` using Tailwind CSS v4's `@theme` directive:

```css
@theme {
  --color-accent-primary: #00ff88;    /* Main accent (green) */
  --color-accent-secondary: #00d4ff;  /* Secondary accent (cyan) */
  --color-accent-tertiary: #ff6b35;   /* Tertiary accent (orange) */
  /* ... more colors */
}
```

## 🌐 Deployment

### GitHub Pages

1. Update `vite.config.ts` base path if needed:
   ```ts
   base: '/your-repo-name/'
   ```
2. Run `npm run build`
3. Deploy the `dist` folder

### Vercel / Netlify

Simply connect your repository - these platforms auto-detect Vite projects.

## 📄 License

MIT License - Feel free to use this template for your own portfolio!
