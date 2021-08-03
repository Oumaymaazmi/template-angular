import { Injectable } from '@angular/core';
import {Menu} from "../../core/model/menu";
import {HttpClient} from "@angular/common/http";
import {Pojo} from "../../core/model/pojo";
import {RoleConfig} from "../../core/model/roleConfig";
import { BehaviorSubject } from 'rxjs';
import {MenuRole} from "../../core/model/menuRole";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private _menus:Array<Menu>=new Array<Menu>();
  private _menu: Menu = new Menu();
  private _selectes: Array<Menu>;
  private _addMenuDailog:boolean=false;
  private _editMenuDialog:boolean=false;
  private _viewMenuDialog:boolean = false;
  private _selectedMenu:Menu = new Menu();
  public viewRefresh$ = new BehaviorSubject<boolean>(false);
  private _menusToBeAffected:Menu[]=[];
  private _affectedMenus:MenuRole[]=[];
  constructor(private http: HttpClient) { }
  get affectedMenus(): MenuRole[] {
    return this._affectedMenus;
  }
  set affectedMenus(value: MenuRole[]) {
    this._affectedMenus= value;
  }
  get menusToBeAffected(): Menu[] {
    return this._menusToBeAffected;
  }

  set menusToBeAffected(value: Menu[]) {
    this._menusToBeAffected= value;
  }
  get selectedMenu(): Menu {
    return this._selectedMenu;
  }

  set selectedMenu(value: Menu) {
    this._selectedMenu = value;
  }
  get editMenuDialog(): boolean {
    return this._editMenuDialog;
  }

  set editMenuDialog(value: boolean) {
    this._editMenuDialog = value;
  }
  get selectes(): Array<Menu> {
    return this._selectes;
  }

  set selectes(value: Array<Menu>) {
    this._selectes = value;
  }
  get menus(): Array<Menu> {
    return this._menus;
  }

  set menus(value: Array<Menu>) {
    this._menus = value;
  }

  get menu(): Menu {
    return this._menu;
  }

  set menu(value: Menu) {
    this._menu = value;
  }
  get addMenuDialog(): boolean {
    return this._addMenuDailog;
  }

  set addMenuDialog(value: boolean) {
    this._addMenuDailog = value;
  }
   get viewMenuDialog(): boolean{
        return this._viewMenuDialog;
    }

    set viewMenuDialog(value: boolean) {
        this._viewMenuDialog = value;
    }

}
