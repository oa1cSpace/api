import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products
}

export class TopPageModel {
    _id: string;
    firstLevel: TopLevelCategory;
    secondLevel: string;
    title: string;
    category: string;
    hh?: {
        jobOffers: number;
        startSalary: number;
        midSalary: number;
        topSalary: number;
    };
    advantages: {
        title: string;
        description: string;
    }[];
    seoText: string;
    tagsTitle: string;
    tags: string[];
}
