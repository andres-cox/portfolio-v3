export interface ISoftProject {
    subheadline: string;
    headline: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    website: string;
    details: ISoftProjectDetails;
}

export interface ISoftProjectDetails {
    title: string;
    summary: string;
    images: string[];
    cards: Card[];
    conclusion: string;
}

export interface ISoftProjectLinks {
    github: string;
    website: string;
}

interface Card {
    subtitle: string;
    text: string;
    image: string;
}