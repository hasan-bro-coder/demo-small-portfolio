# Photographer Portfolio

A modern, SEO-optimized photography portfolio built with Astro.

## SEO Configuration

All site-wide SEO data is centralized in `src/data.ts`. Update the following values with your information:

### Required Updates

1. **Site URL**: Change `url` in `siteConfig` to your actual domain
2. **Social Links**: Update all social media URLs in `siteConfig.social`
3. **Contact Info**: Update email and location in `siteConfig.contact`
4. **Twitter Handle**: Update `twitterHandle` if you have one
5. **OG Image**: Add an `og-image.jpg` (1200x630px) to the `public/` folder
6. **Favicon**: Add a `favicon.ico` to the `public/` folder

### Files to Update

- `src/data.ts` - Main SEO configuration
- `public/og-image.jpg` - Open Graph image
- `public/favicon.ico` - Site favicon

### SEO Features Included

- ✅ Comprehensive meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ Structured data (JSON-LD) for photographer profile
- ✅ Canonical URLs
- ✅ Automatic sitemap generation
- ✅ Optimized image alt texts
- ✅ Article metadata for gallery pages

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Dependencies

Make sure to install the sitemap integration:

```bash
npm install @astrojs/sitemap
```
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
