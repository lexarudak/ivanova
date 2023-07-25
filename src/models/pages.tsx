import { InfoPage } from "@/app/components/InfoPage/InfoPage";
import {
  EDUCATION_DATA,
  EXPERIENCE_DATA,
  PageNames,
  SKILLS_DATA,
} from "./const";
import { AboutPage } from "@/app/components/AboutPage/AboutPage";

export const pages = new Map([
  [PageNames.education, <InfoPage key={1} data={EDUCATION_DATA} />],
  [PageNames.skills, <InfoPage key={2} data={SKILLS_DATA} />],
  [PageNames.experience, <InfoPage key={3} data={EXPERIENCE_DATA} />],
  [PageNames.about, <AboutPage key={4} />],
  [PageNames.portfolio, <div key={5}>THIS IS portfolio</div>],
]);
