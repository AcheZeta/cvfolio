import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { z } from 'astro:content';

const SiteConfigSchema = z.object({
  sections: z.object({
    about: z.boolean(),
    workExperience: z.boolean(),
    talks: z.boolean(),
    writing: z.boolean(),
    socialLinks: z.boolean(),
  }),
  elements: z.object({
    avatar: z.boolean(),
    themeSwitch: z.boolean(),
    header: z.boolean(),
    footer: z.boolean(),
  }),
});

type SiteConfig = z.infer<typeof SiteConfigSchema>;

const defaultConfig: SiteConfig = {
  sections: {
    about: true,
    workExperience: true,
    talks: true,
    writing: true,
    socialLinks: true,
  },
  elements: {
    avatar: true,
    themeSwitch: true,
    footer: true,
    header: true,
  },
};

function deepMerge(target: any, source: any): any {
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (!target[key] || typeof target[key] !== 'object') target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      if (target[key] === undefined) target[key] = source[key];
    }
  }
  return target;
}

export function getSiteConfig(): SiteConfig {
  const configPath = path.join(process.cwd(), 'config.yml');
  try {
    const fileContents = fs.readFileSync(configPath, 'utf8');
    const loadedConfig = yaml.load(fileContents);
    if (!loadedConfig || typeof loadedConfig !== 'object') return defaultConfig;
    const merged = deepMerge(loadedConfig, defaultConfig);
    return SiteConfigSchema.safeParse(merged).success ? merged as SiteConfig : defaultConfig;
  } catch {
    return defaultConfig;
  }
}