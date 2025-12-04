import type { z } from 'astro/zod';
import MetaDefaultImage from '@/assets/images/meta-default.jpg';
import avatar from '@/assets/images/avatar.jpeg';
import type { seoSchemaWithoutImage } from '@/content.config';
import astroConfig from 'astro.config.mjs';

export type AuthorInfo = {
  name: string;
  avatar: any;
  headline: string;
  username?: string;
  location?: string;
  pronouns?: string;
}

export type Seo = z.infer<typeof seoSchemaWithoutImage> & {
  image?: any;
}

type DefaultConfigurationType = {
  baseUrl: string,
  author: AuthorInfo;
  seo: Seo;
}

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  baseUrl: astroConfig.site || 'https://getcvfolio.com',
  author: {
    avatar,
    name: 'Hame Elizalde',
    headline: 'Product Designer & Digital Strategist | UX Writer especializada en educación y productos digitales de alto impacto.',
    username: 'Ache_Zeta',
    location: 'México',
    pronouns: 'Ella/She',
  },
  seo: {
    title: 'Hame Elizalde | Portafolio',
    description: 'Product Designer | UX Writer | Digital Strategist',
    type: 'website',
    image: MetaDefaultImage,
    twitter: {
      creator: '@ache_zeta',
    },
    robots: 'noindex, nofollow',
  }
};