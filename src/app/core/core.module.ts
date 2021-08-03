import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./root/app.component";
import {AppMainComponent} from "./main/app.main.component";
import {Xx_sharedModule} from "../-shared/xx_shared.module";
import {AppConfigComponent} from "./config/app.config.component";


@NgModule({
    declarations: [
        AppMainComponent,
        AppComponent,
        AppConfigComponent,
    ],
    imports: [
        BrowserModule,
        CoreRoutingModule,
        Xx_sharedModule,
    ],
    exports: [AppComponent,AppConfigComponent]
})
export class CoreModule {
}
