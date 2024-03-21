import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

const projectsDirectory = join(process.cwd(), 'projects');

export type ProjectGenericProps = {
  [key: string]: string ;
};

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectsByTag(tag: string, fields: string[] = []) {
  const slugs = getProjectSlugs();
  if ( !fields.includes('tags') )  {
    fields.push('tags');
  }
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    .filter(project => project.tags?.includes(tag) )
    .sort((project1, project2) => (project1.name > project2.name ? 1 : -1));
    return projects;
}

export function getProjectsByCategory(category: string, fields: string[] = []) {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    .filter(project => project.category.toLocaleLowerCase() === category.toLocaleLowerCase())
    .sort((project1, project2) => (project1.name > project2.name ? 1 : -1));
    return projects;
}


export function getProjectBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(projectsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const items: ProjectGenericProps = { }; // name: '', slug: '', category: '',  description: '', image: '',  tags: [], href: ''  , content: '' 

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'href') {
      items[field] = '/projects/' + realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (field === 'tags') {
      items[field] = data[field] ? data[field]: [];
    }
   
    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}
export function getAllCategories() {
  const projects = getAllProjects(['category']).map(p => p.category);
  return Array.from(new Set(projects));  
}

export function getAllProjects(fields: string[] = []) {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    // sort projects by name order
    .sort((project1, project2) => (project1.name > project2.name ? 1 : -1));
    return projects;
}
