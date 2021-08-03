import { Pojo } from "./pojo";
import { Type } from "./type";

export class Field {
  public name: string;
  public type: Type;
  public simple: boolean;
  public list: boolean = false;
  public generic: boolean;
  public id: boolean = false;
  public reference: boolean = false;
  //public pojo: Pojo;
  public mappedBy: string;
  public comboBox: boolean;
}
