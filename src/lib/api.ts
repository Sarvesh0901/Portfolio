const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:3000';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  icon: string;
  color: string;
  order: number;
  is_active: boolean;
  created_at: string;
}

export interface Skill {
  id: number;
  category: string;
  items: string[];
  icon: string;
  color: string;
  order: number;
  is_active: boolean;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  order: number;
  is_active: boolean;
  created_at: string;
}

export interface PersonalInfo {
  id: number;
  name: string;
  initials: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  tagline: string;
  updated_at: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Generic fetch wrapper with error handling
async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || data.error || `HTTP ${response.status}: ${response.statusText}`);
    }

    return data;
  } catch (error) {
    console.error(`API request failed for ${endpoint}:`, error);
    throw error;
  }
}

// API methods
export const api = {
  // Get all projects
  getProjects: () => fetchApi<{ success: boolean; projects: Project[] }>('/api/projects'),
  
  // Get all skills
  getSkills: () => fetchApi<{ success: boolean; skills: Skill[] }>('/api/skills'),
  
  // Get all experiences
  getExperience: () => fetchApi<{ success: boolean; experiences: Experience[] }>('/api/experience'),
  
  // Get personal info (About)
  getPersonalInfo: () => fetchApi<{ success: boolean; personalInfo: PersonalInfo }>('/api/about'),
  
  // Send contact form
  sendContactForm: (data: ContactFormData) => 
    fetchApi<{ success: boolean; message: string; id: number }>('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

export default api;
