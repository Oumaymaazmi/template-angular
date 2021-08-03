import {RoleConfig} from "./roleConfig";
import {Pojo} from "./pojo";

export class Permission{
    public id?:number;
    public name:string;
    public roles?:Array<RoleConfig>;
    public pojo?:Pojo;

}
