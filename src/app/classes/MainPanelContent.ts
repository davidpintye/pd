export class MainPanelContent {
    constructor (
        public itSkills: {paragraphOne: string, paragraphTwo: string},
        public workExperience: {firstLine: string, secondLine: string, desc: string}[],
        public educations: {firstLine: string, secondLine: string, desc: string}[],
        public strengths: string,
        public projects: { beforeTheATag: string, src: string, afterTheATag: string },
        public languages: {lang: string, level: string}[],
        public hobbies: {name: string, img: string}[]
    ) { }
}