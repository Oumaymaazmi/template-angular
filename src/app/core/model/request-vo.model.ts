import {Pojo} from "./pojo";
import {UserConfig} from "./userConfig";

export class RequestVo {
   public yamlText: string;
   public pojos: Array<Pojo>
   public userConfig: UserConfig ;
}
