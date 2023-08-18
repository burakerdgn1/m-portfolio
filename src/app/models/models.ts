export interface Education {
  institute: string;
  course: string;
  duration: string;
  state:string;
  payment:string;
  score: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  
}

export interface Skill {
  name: string;
  level: string;
  rating: number;
}

export interface Project {
  title: string;
  technologies: string;
  description: string[];
  imagePath:string;
  link:string;

}
export interface Honor {
  institute: string;
  course: string;
  duration: string;
  score: string;
}

export interface Certificate{
  institute:string,
  course:string,
  link:string,

}
