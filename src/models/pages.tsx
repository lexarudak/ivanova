import { Education } from "@/app/components/Education/Education";
import { PageNames } from "./const";

export const pages = new Map([
  [PageNames.education, <Education key={1} />],
  [PageNames.skills, <div key={2}>THIS IS SKILLS</div>],
  [PageNames.experience, <div key={3}>THIS IS experience</div>],
  [PageNames.about, <div key={4}>THIS IS about</div>],
  [PageNames.portfolio, <div key={5}>THIS IS portfolio</div>],
]);
