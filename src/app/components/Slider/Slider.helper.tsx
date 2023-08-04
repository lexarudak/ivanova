import { projectMap } from "@/models/projects";
import { PhotoBlock } from "../PhotoBlock/PhotoBlock";
import { Project } from "../Portfolio/Portfolio.interface";

export const fillSlider = (
  projectList: Project[],
  currentProject: string,
  setCurrentProject: (setActivePage: string) => void,
  setActivePage: (setActivePage: string) => void,
  setScrollTo: (name: string) => void
): JSX.Element[] => {
  if (currentProject) {
    return fillProjectSlider(currentProject, setScrollTo);
  } else {
    return fillPortfolioSlider(projectList, setCurrentProject, setActivePage);
  }
};

const fillProjectSlider = (
  currentProject: string,
  setScrollTo: (name: string) => void
): JSX.Element[] => {
  const project = projectMap.get(currentProject);
  if (!project) return [<></>];
  const { photos } = project;
  return photos.map((val) => {
    return (
      <PhotoBlock
        key={val}
        bg={val}
        onClickHandler={setScrollTo.bind(null, val)}
      />
    );
  });
};

const fillPortfolioSlider = (
  projectList: Project[],
  setCurrentProject: (setActivePage: string) => void,
  setActivePage: (setActivePage: string) => void
): JSX.Element[] => {
  return projectList.map(({ title, photos }) => {
    const [firstPhoto] = photos;
    return (
      <PhotoBlock
        key={title}
        bg={firstPhoto}
        onMouseEnterHandler={setActivePage.bind(null, title)}
        onMouseLeaveHandler={setActivePage.bind(null, "")}
        onClickHandler={setCurrentProject.bind(null, title)}
      />
    );
  });
};
