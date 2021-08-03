import {Permission} from "./permission";
import {MenuRole} from "./menuRole";

export class RoleConfig {
    public name:string;
    public permissions?:Array<Permission> = [];
    public menuRoles?:Array<MenuRole>=[];
}
