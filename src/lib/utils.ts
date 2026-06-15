import { DEFAULT_CONFIGURATION } from './constants';
import type { CollectionEntry } from 'astro:content';

export const formatDate = (date: Date) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC', // Default to UTC to prevent timezone issues
  });

  // Ensure we're parsing the date correctly
  return formatter.format(new Date(date));
};

export const generateAbsoluteUrl = (path: string) =>
  DEFAULT_CONFIGURATION.baseUrl.concat(path);

export const isDevelopment = () => import.meta.env.MODE === 'development';

export const includeDraft = (draft: boolean) => {
  if (isDevelopment()) return true;
  return draft !== true;
};

export const sortJobsByDate = (jobs: CollectionEntry<'jobs'>[]) => {
  // Convert "Now" to current year, otherwise returns the year as is
  const getEndYear = (job: CollectionEntry<'jobs'>) =>
    job.data.to === 'Now' ? new Date().getFullYear() : job.data.to;

  return jobs.sort((current, next) => {
    // Compare end years first, then fall back to start years if end years are equal
    const [currentEnd, nextEnd] = [getEndYear(current), getEndYear(next)];
    return nextEnd - currentEnd || next.data.from - current.data.from;
  });
};

export const sortTalksByDate = (talks: CollectionEntry<'talks'>[]) => {
  return talks.sort((current, next) => {
    return next.data.year - current.data.year;
  });
};

// utils.ts — añadir al final
export const sortByYear = <T extends { data: { year: number } }>(
  items: T[],
) => {
  return items.sort((a, b) => b.data.year - a.data.year);
};

export interface NavItem {
  href: string;
  label: string;
  emoji: string;
  isActive: boolean;
}

export const getNavItems = (pathname: string): NavItem[] => {
  const items = [
    { href: '/', label: 'Ver todo', emoji: '◈' },
    { href: '/portafolio', label: 'Portafolio', emoji: '◉' },
    { href: '/writing', label: 'Blog', emoji: '◎' },
    { href: '/talks', label: 'Charlas', emoji: '◇' },
    { href: '/about', label: 'Sobre mí', emoji: '◍' },
  ];

  return items.map((item) => ({
    ...item,
    isActive: item.href === '/' ? pathname === '/' : pathname.startsWith(item.href),
  }));
};