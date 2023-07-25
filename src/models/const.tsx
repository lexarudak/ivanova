import { InfoData } from "./intaerface";

export const POPUP_CONTAINER = "popup_container";

export enum PageNames {
  empty = "",
  education = "education",
  skills = "skills",
  experience = "experience",
  about = "about me",
  portfolio = "portfolio",
}

export const EDUCATION_DATA: InfoData[] = [
  {
    text: "Belorussian National Technical University, Minsk, Belarus Bachelor of Architecture",
    bold: "September 2008 - June 2014",
  },
  {
    text: "College of Architecture and Civil Engineering, Mogilev, Belarus Specialty - architect",
    bold: "September 2005 - May 2007",
  },
];

export const SKILLS_DATA: InfoData[] = [
  {
    text: "Revit, SketchUp, Enscape, AutoCAD, Microsoft Office (Word, Excel)",
    bold: "Advanced",
  },
  {
    text: "ArchiCAD, Adobe Photoshop, CorelDRAW",
    bold: "Intermediate",
  },
];

export const EXPERIENCE_DATA: InfoData[] = [
  {
    title: "Teltsov&partners",
    text: "Architect, full-time employment. Minsk, Belarus",
    link: "https://teltsov.by/",
    bold: "November 2013 - April 2020",
  },
  {
    title: "LEVEL80 | architects",
    text: "Architect, full-time employment. Minsk, Belarus",
    link: "https://level80.pro/en",
    bold: "May 2020 - Present",
  },
];
