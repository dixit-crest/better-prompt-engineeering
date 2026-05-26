import { useState, useEffect, useCallback } from 'react';
import { 
  getAllProjects, 
  getProject, 
  saveProject, 
  getMeta, 
  setMeta, 
  IProject 
} from '../services/projectDB';
import type { FullPrompt } from '../types';

export const useProjects = (currentPrompt: FullPrompt, onLoadPrompt: (prompt: FullPrompt) => void) => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load projects and last selected project on mount
  useEffect(() => {
    const init = async () => {
      try {
        const allProjects = await getAllProjects();
        setProjects(allProjects);

        const lastId = await getMeta('lastProjectId');
        if (lastId) {
          const project = await getProject(lastId);
          if (project) {
            setCurrentProjectId(lastId);
            onLoadPrompt(project.prompt);
          }
        }
      } catch (error) {
        console.error('Failed to initialize projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    init();
  }, [onLoadPrompt]);

  // Save current project state to DB whenever it changes
  useEffect(() => {
    if (!currentProjectId) return;

    const project = projects.find(p => p.id === currentProjectId);
    if (!project) return;

    const saveTimeout = setTimeout(async () => {
      const updatedProject: IProject = {
        ...project,
        prompt: currentPrompt,
        savedAt: Date.now(),
      };
      await saveProject(updatedProject);
    }, 1000); // Debounce saves

    return () => clearTimeout(saveTimeout);
  }, [currentPrompt, currentProjectId, projects]);

  const selectProject = useCallback(async (id: string | null) => {
    setCurrentProjectId(id);
    if (id) {
      await setMeta('lastProjectId', id);
      const project = await getProject(id);
      if (project) {
        onLoadPrompt(project.prompt);
      }
    } else {
      // If "None" selected, maybe reset prompt? 
      // The user spec says: "User does not select / Add project: No need to save"
      // So if no project is selected, we just work in memory.
    }
  }, [onLoadPrompt]);

  const createProject = useCallback(async (name: string) => {
    const newProject: IProject = {
      id: crypto.randomUUID(),
      name,
      savedAt: Date.now(),
      prompt: currentPrompt,
    };

    await saveProject(newProject);
    setProjects(prev => [...prev, newProject]);
    setCurrentProjectId(newProject.id);
    await setMeta('lastProjectId', newProject.id);
  }, [currentPrompt]);

  const renameProject = useCallback(async (id: string, name: string) => {
    const project = projects.find(p => p.id === id);
    if (project) {
      const updated = { ...project, name };
      await saveProject(updated);
      setProjects(prev => prev.map(p => p.id === id ? updated : p));
    }
  }, [projects]);

  return {
    projects,
    currentProjectId,
    isLoading,
    selectProject,
    createProject,
    renameProject,
  };
};
