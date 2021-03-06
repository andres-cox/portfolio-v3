import { ISoftProject } from './soft-project.interface';

export class SoftProject implements ISoftProject {
    subheadline: string;
    headline: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    website: string;

    constructor(
        subheadline: string,
        headline: string,
        image: string,
        technologies: string[],
        github: string,
        website: string
    ) {
        this.subheadline = subheadline
        this.headline = headline
        this.image = image
        this.technologies = technologies
        this.github = github
        this.website = website
    }

}
