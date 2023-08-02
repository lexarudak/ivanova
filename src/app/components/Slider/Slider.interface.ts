import { Project } from "../Portfolio/Portfolio.interface";

export interface SliderProps {
  currentProject: string;
  setCurrentProject: (pageNumber: string) => void;
  projectList: Project[];
}
