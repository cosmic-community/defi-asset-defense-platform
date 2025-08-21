# DeFi Asset Defense Platform

![DeFi Platform Preview](https://imgix.cosmicjs.com/e96c4dc0-7ea8-11f0-8dcc-651091f6a7c0-photo-1639762681485-074b7f938ba0-1755792438212.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive DeFi landing page platform that showcases asset defense capabilities with real-time analytics, portfolio management tools, and dynamic content management through Cosmic CMS.

## ✨ Features

- **Dynamic Landing Pages** - Customizable hero sections with dynamic content
- **Interactive Feature Cards** - Showcase different DeFi tools and capabilities  
- **Real-time Statistics** - Performance metrics with trend indicators
- **UI Component System** - Reusable buttons, charts, and navigation elements
- **Dark Theme Design** - Modern, sophisticated visual design
- **Responsive Layout** - Optimized for all device sizes
- **CMS Integration** - Full content management through Cosmic
- **Performance Optimized** - Fast loading with optimized images

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=68a74240e340d628986f6235&clone_repository=68a74800e340d628986f6251)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> Create a landing page that I can repeatedly use that is visually looking like the screenshot attached and also using the CMS build content structure.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies Used

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **CMS**: Cosmic CMS for content management
- **Language**: TypeScript for type safety
- **Package Manager**: Bun for fast dependency management
- **Deployment**: Vercel-ready configuration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Set up your environment variables (see Environment Variables section)
4. Run the development server:

```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the application

## 📡 Cosmic SDK Examples

### Fetching Landing Page Data

```typescript
import { cosmic } from '@/lib/cosmic'

// Get landing page with related content
const landingPage = await cosmic.objects.findOne({
  type: 'landing-pages',
  slug: 'defi-asset-defense-landing-page'
}).depth(2)

// Access nested feature cards and stats
const featureCards = landingPage.object.metadata.featured_components
const keyStats = landingPage.object.metadata.key_stats
```

### Fetching Statistics

```typescript
// Get all statistics with trend data
const stats = await cosmic.objects.find({
  type: 'stats'
}).props(['id', 'title', 'metadata'])

// Filter by trend direction
const upwardTrends = await cosmic.objects.find({
  type: 'stats',
  'metadata.trend_direction': 'up'
})
```

### Fetching UI Components

```typescript
// Get specific UI component configuration
const ctaButton = await cosmic.objects.findOne({
  type: 'ui-components',
  slug: 'primary-cta-button'
})

const buttonConfig = ctaButton.object.metadata.configuration
```

## 🎨 Cosmic CMS Integration

This application integrates with your existing Cosmic CMS structure:

- **Landing Pages**: Hero content, CTAs, and page configuration
- **Feature Cards**: Interactive showcases of platform capabilities
- **Statistics**: Real-time metrics with trend indicators and color coding
- **UI Components**: Reusable design elements with theme variations

All content is dynamically fetched from your Cosmic bucket and rendered with appropriate styling and animations.

## 🌐 Deployment Options

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Add your environment variables in the Vercel dashboard
3. Deploy automatically on every push to main

### Netlify

1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

### Environment Variables

Set these variables in your deployment platform:

- `COSMIC_BUCKET_SLUG`: Your Cosmic bucket slug
- `COSMIC_READ_KEY`: Your Cosmic read key
- `COSMIC_WRITE_KEY`: Your Cosmic write key (if using write operations)

<!-- README_END -->