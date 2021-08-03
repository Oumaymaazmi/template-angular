import { Component } from '@angular/core';
import { AppComponent } from '../../core/root/app.component';
import { AppMainComponent } from '../../core/main/app.main.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    constructor(public app: AppComponent, public appMain: AppMainComponent) {}
}
