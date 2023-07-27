import { InfoPage } from "@/app/components/InfoPage/InfoPage";
import {
  EDUCATION_DATA,
  EXPERIENCE_DATA,
  PageNames,
  SKILLS_DATA,
} from "./const";
import { AboutPage } from "@/app/components/AboutPage/AboutPage";
import { Portfolio } from "@/app/components/Portfolio/Portfolio";
import { PROJECTS } from "./projects";

export const pages = new Map([
  [PageNames.education, <InfoPage key={1} data={EDUCATION_DATA} />],
  [PageNames.skills, <InfoPage key={2} data={SKILLS_DATA} />],
  [PageNames.experience, <InfoPage key={3} data={EXPERIENCE_DATA} />],
  [PageNames.about, <AboutPage key={4} />],
  [PageNames.portfolio, <Portfolio key={5} projectList={PROJECTS} />],
]);
