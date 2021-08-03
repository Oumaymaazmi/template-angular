import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { NgModule } from "@angular/core";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./core/root/app.component";
import { AppCodeModule } from "./app.code.component";
import { AppConfigComponent } from "./core/config/app.config.component";
import { MenuService } from "./-shared/menu/app.menu.service";
import { CodeEditorModule } from "@ngstack/code-editor";
import {AuthenticationService} from "./-shared/auth/authenticationService";
import { TaskListComponent } from './components/task-list/task-list.component';
import {PrimengModule} from "./-shared/primeng.module";
import {Xx_sharedModule} from "./-shared/xx_shared.module";
import {CoreModule} from "./core/core.module";
@NgModule({
  imports: [
    FormsModule,
    AppRoutingModule,
    AppCodeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CodeEditorModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DynamicDialogModule,
      FormsModule,
    PrimengModule,
    Xx_sharedModule,
    CoreModule,
  ],
  declarations: [
    TaskListComponent,
    ],
  entryComponents:[
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
