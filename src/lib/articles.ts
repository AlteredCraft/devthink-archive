import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface Article {
  slug: string;
  title: string;
  author: string;
  date: string;
  url: string;
  filename: string;
  content?: string;
  excerpt?: string;
}

export interface PaginatedArticles {
  articles: Article[];
  currentPage: number;
  totalPages: number;
  totalArticles: number;
}

const articlesDirectory = path.join(process.cwd(), 'public/articles');

export function getAllArticles(): Article[] {
  try {
    const indexPath = path.join(articlesDirectory, 'articles_index.json');
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    const articlesIndex: Article[] = JSON.parse(indexContent);
    
    return articlesIndex.map(article => ({
      ...article,
      slug: article.filename.replace('.md', ''),
      excerpt: generateExcerpt(article.title)
    }));
  } catch (error) {
    console.error('Error loading articles:', error);
    return [];
  }
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const articles = getAllArticles();
    const article = articles.find(a => a.slug === slug);
    
    if (!article) return null;
    
    const fullPath = path.join(articlesDirectory, article.filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    let data, content;
    try {
      const parsed = matter(fileContents);
      data = parsed.data;
      content = parsed.content;
    } catch (yamlError) {
      console.error(`YAML parsing error for ${slug}:`, yamlError);
      
      // Try to fix common YAML issues - unquoted titles with colons
      let fixedContents = fileContents;
      
      // Fix unquoted titles that contain colons by quoting them
      // This handles cases like: title: Context Rot: How LLMs Degrade...
      fixedContents = fixedContents.replace(/^title:\s*([^"\n]+:[^"\n]*)$/m, 'title: "$1"');
      
      // Also fix any other unquoted fields that might contain colons
      fixedContents = fixedContents.replace(/^(author|url):\s*([^"\n]+:[^"\n]*)$/gm, '$1: "$2"');
      
      try {
        const parsed = matter(fixedContents);
        data = parsed.data;
        content = parsed.content;
      } catch (secondError) {
        console.error(`Second YAML parsing error for ${slug}:`, secondError);
        // Final fallback: extract content after first occurrence of "---"
        const lines = fileContents.split('\n');
        const contentStartIndex = lines.findIndex((line, index) => index > 0 && line.trim() === '---');
        content = contentStartIndex > -1 ? lines.slice(contentStartIndex + 1).join('\n') : fileContents;
        data = {};
      }
    }
    
    return {
      ...article,
      content: content,
      title: data.title || article.title,
      author: data.author || article.author,
      date: data.date || article.date,
    };
  } catch (error) {
    console.error(`Error loading article ${slug}:`, error);
    return null;
  }
}

export async function getProcessedArticleContent(slug: string): Promise<string> {
  const article = getArticleBySlug(slug);
  if (!article?.content) return '';
  
  // Fix malformed markdown links: [text]("url") -> [text](url)
  let fixedContent = article.content.replace(/\[([^\]]+)\]\("([^"]+)"\)/g, '[$1]($2)');
  
  // Remove the duplicate frontmatter-style content that appears in the body
  // This removes patterns like "title: ... author: ... date: ... url: ... scraped_at: ..."
  fixedContent = fixedContent.replace(/^title:\s+.*\nauthor:\s+.*\ndate:\s+.*\nurl:\s+.*\nscraped_at:\s+.*\n/m, '');
  
  // Remove the duplicate title and author lines that appear in content
  // Pattern: # Title \n\n *By Author on Date* \n\n ---
  fixedContent = fixedContent.replace(/^# [^\n]+\n\n\*By [^\n]+ on [^\n]+\*\n\n---\n/m, '');
  
  // Remove any remaining duplicate title lines
  const titleLines = fixedContent.split('\n');
  if (titleLines.length > 1 && titleLines[0].startsWith('# ') && titleLines[2] && titleLines[2].startsWith('# ')) {
    // Remove the first title if there's a duplicate
    fixedContent = titleLines.slice(1).join('\n');
  }
  
  const processedContent = await remark()
    .use(html)
    .process(fixedContent);
  
  return processedContent.toString();
}

export function getPaginatedArticles(page: number = 1, perPage: number = 12): PaginatedArticles {
  const allArticles = getAllArticles();
  const totalArticles = allArticles.length;
  const totalPages = Math.ceil(totalArticles / perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  
  return {
    articles: allArticles.slice(startIndex, endIndex),
    currentPage: page,
    totalPages,
    totalArticles
  };
}

export function getFeaturedArticles(count: number = 3): Article[] {
  const allArticles = getAllArticles();
  return allArticles.slice(0, count);
}

export function searchArticles(query: string): Article[] {
  const allArticles = getAllArticles();
  const lowercaseQuery = query.toLowerCase();
  
  return allArticles.filter(article => 
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.author.toLowerCase().includes(lowercaseQuery)
  );
}

function generateExcerpt(title: string): string {
  return `Explore ${title.toLowerCase()} in this comprehensive guide covering key concepts, practical implementations, and expert insights for developers.`;
}

export function getAllSlugs(): string[] {
  const allArticles = getAllArticles();
  return allArticles.map(article => article.slug);
}