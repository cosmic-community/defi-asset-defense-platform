import { createBucketClient } from '@cosmicjs/sdk';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
});

// Helper function for handling unknown errors
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Get landing page with nested data
export async function getLandingPage(slug = 'defi-asset-defense-landing-page') {
  try {
    const response = await cosmic.objects.findOne({
      type: 'landing-pages',
      slug
    }).depth(2);
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch landing page');
  }
}

// Get all feature cards
export async function getFeatureCards() {
  try {
    const response = await cosmic.objects.find({
      type: 'feature-cards'
    }).props(['id', 'title', 'slug', 'metadata']).depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch feature cards');
  }
}

// Get all statistics
export async function getStats() {
  try {
    const response = await cosmic.objects.find({
      type: 'stats'
    }).props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch statistics');
  }
}

// Get UI components
export async function getUIComponents() {
  try {
    const response = await cosmic.objects.find({
      type: 'ui-components'
    }).props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch UI components');
  }
}

// Get specific UI component
export async function getUIComponent(slug: string) {
  try {
    const response = await cosmic.objects.findOne({
      type: 'ui-components',
      slug
    });
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error(`Failed to fetch UI component: ${slug}`);
  }
}