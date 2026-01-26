# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for Jess Spoon, a blues/rock band. Built with **Zola** (static site generator) and **Tailwind CSS**. Deployed to GitHub Pages at https://jessspoon.com/.

## Commands

### Local Development

```bash
# Serve site locally with live reload
zola serve

# Build site for production
zola build
```

### Tailwind CSS (from tailwind/ directory)

```bash
cd tailwind/
npm run build         # Production build (minified)
npm run build:dev     # Development build
npm run build:watch   # Watch mode for development
npm run updates       # Check for npm package updates (uses ncu)
npm run postupdates   # Install updates and audit fixes
```

### Deployment

Automated via GitHub Actions on push to main. Deploys to `gh-pages` branch using `shalzz/zola-deploy-action`. Requires `PERSONAL_ACCESS_TOKEN` secret.

## Architecture

### Directory Structure

- `content/` - Markdown pages (e.g., `press-kit.md`)
- `templates/` - Tera templates (`base.html`, `index.html`, `page.html`, `press-kit.html`)
- `themes/jessspoonTheme/` - Custom theme with layouts and partials
- `static/` - Static assets (CSS, images, CNAME)
- `tailwind/` - Tailwind CSS build setup (separate npm project)

### Build Pipeline

1. Tailwind compiles `tailwind/src/tailwind.css` → `static/css/styles.css`
2. Zola builds site from templates and content, compiling Sass if present
3. GitHub Actions deploys built site to `gh-pages` branch

### Configuration

- `config.toml` - Zola configuration (base URL, Sass compilation, search index)
- `tailwind/tailwind.config.js` - Tailwind configuration
