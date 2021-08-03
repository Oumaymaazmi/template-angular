import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { AppMainComponent } from "./core/main/app.main.component";
import { AppNotfoundComponent } from "./-shared/not-found/app.notfound.component";
import { AppErrorComponent } from "./-shared/error/app.error.component";
import { AppLoginComponent } from "./-shared/auth/app.login.component";
import {TaskListComponent} from "./components/task-list/task-list.component";


@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: "",
                    component: AppMainComponent,
                    children: [
                        {path: "tasks", component: TaskListComponent},
                        {path: "login", component: AppLoginComponent},
                        /*  {path: 'view/commande', component: CommandesComponent},
                                {path: 'uikit/formlayout', component: FormLayoutDemoComponent},
                                {path: 'uikit/floatlabel', component: FloatLabelDemoComponent},
                                {path: 'uikit/invalidstate', component: InvalidStateDemoComponent},
                                {path: 'uikit/input', component: InputDemoComponent},
                                {path: 'uikit/button', component: ButtonDemoComponent},
                                {path: 'uikit/table', component: TableDemoComponent},
                                {path: 'uikit/list', component: ListDemoComponent},
                                {path: 'uikit/tree', component: TreeDemoComponent},
                                {path: 'uikit/panel', component: PanelsDemoComponent},
                                {path: 'uikit/overlay', component: OverlaysDemoComponent},
                                {path: 'uikit/media', component: MediaDemoComponent},
                                {path: 'uikit/menu', component: MenusDemoComponent},
                                {path: 'uikit/message', component: MessagesDemoComponent},
                                {path: 'uikit/misc', component: MiscDemoComponent},
                                {path: 'uikit/charts', component: ChartsDemoComponent},
                                {path: 'uikit/file', component: FileDemoComponent},
                                {path: 'utilities/display', component: DisplayComponent},
                                {path: 'utilities/elevation', component: ElevationComponent},
                                {path: 'utilities/flexbox', component: FlexboxComponent},
                                {path: 'utilities/grid', component: GridComponent},
                                {path: 'utilities/icons', component: IconsComponent},
                                {path: 'utilities/widgets', component: WidgetsComponent},
                                {path: 'utilities/spacing', component: SpacingComponent},
                                {path: 'utilities/typography', component: TypographyComponent},
                                {path: 'utilities/text', component: TextComponent},
                                {path: 'pages/crud', component: AppCrudComponent},
                                {path: 'pages/calendar', component: AppCalendarComponent},
                                {path: 'pages/timeline', component: AppTimelineDemoComponent},
                                {path: 'pages/empty', component: EmptyDemoComponent},
                                {path: 'documentation', component: DocumentationComponent} */
                    ],
                },

                {path: "error", component: AppErrorComponent},
                {path: "404", component: AppNotfoundComponent},
                {path: "", redirectTo: "/login", pathMatch: "full"},
            ],
            {scrollPositionRestoration: "enabled"}
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {

}
