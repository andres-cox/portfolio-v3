import { ISoftProject } from './soft-project.interface';

export class SoftProject implements ISoftProject {
    subheadline: string;
    title: string;
    description: string;
    technologies: string[];
    github: string;
    website: string;

    constructor(
        subheadline: string,
        title: string,
        description: string,
        technologies: string[],
        github: string,
        website: string
    ) {
        this.subheadline = subheadline
        this.title = title
        this.description = description
        this.technologies = technologies
        this.github = github
        this.website = website
    }

}
