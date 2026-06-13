import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export function getProfileData() {
  const filePath = path.join(contentDir, 'profile.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export function getExperienceData() {
  const filePath = path.join(contentDir, 'experience.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export function getSkillsData() {
  const filePath = path.join(contentDir, 'skills.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export function getAchievementsData() {
  const filePath = path.join(contentDir, 'achievements.json');
  if (!fs.existsSync(filePath)) return [];
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getSocialsData() {
  const filePath = path.join(contentDir, 'socials.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export function getAllProjects() {
  const projectsDir = path.join(contentDir, 'projects');
  if (!fs.existsSync(projectsDir)) return [];
  
  const fileNames = fs.readdirSync(projectsDir);
  const projects = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(projectsDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      return {
        slug,
        ...data,
        content,
      };
    });
  return projects;
}

export function getProjectBySlug(slug: string) {
  const projects = getAllProjects();
  return projects.find((project) => project.slug === slug);
}
