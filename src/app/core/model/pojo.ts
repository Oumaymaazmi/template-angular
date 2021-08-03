import {Field} from "./field";
import {RoleConfig} from "./roleConfig";
import {Type} from "./type";
import {Permission} from "./permission";

export class Pojo {
    public id?:Field;
    public name?:string;
    public reference?:Field;
    public role?:RoleConfig;
    public fields?:Array<Field>;
    public types?:Array<Type>;
    public fieldsGeneric?: Array<Field>;
    public fieldsSimple?: Array<Field>;
    public fieldsList?: Array<Field>;
    public fieldsSimpleNumberOrDate?: Array<Field>;
    public fieldsSimpleStringOrBoolean?: Array<Field>;
    public hasBigDecimal?: boolean ;
    public hasList?: boolean;
    public idString?: boolean;
    public hasDate?: boolean;
    public compactView?: boolean;
    public permissions?:Array<Permission>


}
