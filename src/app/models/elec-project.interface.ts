export interface IElecProject {
    headline: string,
    intro: string,
    description: string,
    image: string,
    technologies: string[];
    github: string;
    website: string;
    details: IElecProjectDetails;
}

export interface IElecProjectDetails {
    title: string;
    summary: string;
    images: string[];
    cards: Card[];
    video: string;
    conclusion: string;
}

interface Card {
    subtitle: string;
    text: string;
    image: string;
}