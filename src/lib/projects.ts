import fs from 'fs'
import path from 'path'
import { Project } from '@/types'

const projectsDirectory = path.join(process.cwd(), 'src/data/projects')

export async function getAllProjects(): Promise<Project[]> {
  const fileNames = fs.readdirSync(projectsDirectory)
  const projects = fileNames
    .filter((fileName) => fileName.endsWith('.json'))
    .map((fileName) => {
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      return JSON.parse(fileContents) as Project
    })

  return projects.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getAllProjects()
  return projects.find((project) => project.id === slug) || null
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getAllProjects()
  return projects.filter((project) => project.featured)
}

export async function getProjectsByCategory(category: Project['category']): Promise<Project[]> {
  const projects = await getAllProjects()
  return projects.filter((project) => project.category === category)
}

export async function getProjectSlugs(): Promise<string[]> {
  const projects = await getAllProjects()
  return projects.map((project) => project.id)
}