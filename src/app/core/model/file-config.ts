import {Pojo} from "./pojo";

export class FileConfig{


	 nameOrSuffix:string;
	 template:string;
	 extension:string;
	 foreachEntities:boolean = true;
     pojos:Array<Pojo> = new Array<Pojo>();


}
