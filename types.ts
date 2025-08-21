// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Landing Pages
interface LandingPage extends CosmicObject {
  type: 'landing-pages';
  metadata: {
    page_title: string;
    hero_headline: string;
    hero_subtext?: string;
    hero_cta_text?: string;
    hero_cta_link?: string;
    hero_background?: {
      url: string;
      imgix_url: string;
    };
    featured_components?: FeatureCard[];
    key_stats?: Stat[];
  };
}

// Feature Cards
interface FeatureCard extends CosmicObject {
  type: 'feature-cards';
  metadata: {
    card_title: string;
    card_description?: string;
    card_type: {
      key: string;
      value: string;
    };
    background_image?: {
      url: string;
      imgix_url: string;
    };
    primary_action_text?: string;
    primary_action_link?: string;
    display_order?: number;
  };
}

// Statistics
interface Stat extends CosmicObject {
  type: 'stats';
  metadata: {
    stat_label: string;
    stat_value: string;
    stat_description?: string;
    stat_type: {
      key: string;
      value: string;
    };
    trend_direction?: {
      key: string;
      value: string;
    };
    display_color?: string;
  };
}

// UI Components
interface UIComponent extends CosmicObject {
  type: 'ui-components';
  metadata: {
    component_name: string;
    component_type: {
      key: string;
      value: string;
    };
    configuration: Record<string, any>;
    theme_style?: {
      key: string;
      value: string;
    };
  };
}

// Type literals for select-dropdown values
type CardType = 'insights' | 'wallet' | 'analytics' | 'trading';
type ComponentType = 'button' | 'chart' | 'card' | 'navigation';
type StatType = 'percentage' | 'currency' | 'number' | 'ratio';
type TrendDirection = 'up' | 'down' | 'neutral';
type ThemeStyle = 'dark' | 'light' | 'gradient';

// API response types
interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Utility types with proper constraint
type OptionalMetadata<T extends CosmicObject> = Partial<T['metadata']>;

export type {
  CosmicObject,
  LandingPage,
  FeatureCard,
  Stat,
  UIComponent,
  CardType,
  ComponentType,
  StatType,
  TrendDirection,
  ThemeStyle,
  CosmicResponse,
  OptionalMetadata,
};