import type { CollectionEntry } from 'astro:content';
import { getFileCommitDate } from './git';

export const getLastUpdated = (entry: CollectionEntry<'post'>): Date | undefined => {
  const currentFilePath = `src/content/post/` + entry.id + '.md';
  let date = undefined;
  if (!date) {
    try {
      ({ date } = getFileCommitDate(currentFilePath, 'newest'));
    } catch (e) {
      // git not available, fall through to frontmatter
    }
  }
  if (!date && entry.data.updateDate) {
    date = entry.data.updateDate;
  }
  if (!date && entry.data.publishDate) {
    date = entry.data.publishDate;
  }
  return date;
};

export const getCreatedDate = (entry: CollectionEntry<'post'>): Date | undefined => {
  const currentFilePath = `src/content/post/` + entry.id + '.md';
  let date = undefined;
  if (!date) {
    try {
      ({ date } = getFileCommitDate(currentFilePath, 'oldest'));
    } catch (e) {
      // git not available, fall through to frontmatter
    }
  }
  if (!date && entry.data.publishDate) {
    date = entry.data.publishDate;
  }
  return date;
};
