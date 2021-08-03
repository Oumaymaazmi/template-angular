import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Xx_sharedRoutingModule} from './xx_shared-routing.module';
import {PrimengModule} from "./primeng.module";
import {AppFooterComponent} from "./footer/app.footer.component";
import {AppTopBarComponent} from "./top-bar/app.topbar.component";
import {AppRightMenuComponent} from "./right-menu/app.right-menu.component";
import {AppMenuComponent} from "./menu/app.menu.component";
import {AppMenuitemComponent} from "./menu/menu-item/app.menuitem.component";
import {AppLoginComponent} from "./auth/app.login.component";
import {AppErrorComponent} from "./error/app.error.component";
import {AppNotfoundComponent} from "./not-found/app.notfound.component";
import {AuthenticationService} from "./auth/authenticationService";
import {MenuService} from "./menu/app.menu.service";


@NgModule({
    declarations: [
        AppFooterComponent,
        AppTopBarComponent,
        AppRightMenuComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppLoginComponent,
        AppErrorComponent,
        AppNotfoundComponent,
    ],
    imports: [
        CommonModule,

    ], exports: [
        Xx_sharedRoutingModule,
        PrimengModule,
        AppFooterComponent,
        AppTopBarComponent,
        AppRightMenuComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppLoginComponent,
        AppErrorComponent,
        AppNotfoundComponent,

    ],
    providers:[
        AuthenticationService,
        MenuService,
    ]
})
export class Xx_sharedModule {
}
