import { ProjectTemplate } from './projectTemplate';
import { CATEGORY } from './category';

export class Technology{
    name:string;
    description:string;
    defaultTemplate:ProjectTemplate = new ProjectTemplate();
    templates:Array<ProjectTemplate> = new Array<ProjectTemplate>();
    category :CATEGORY = CATEGORY.BACKEND;
}