import {BrowserModule} from '@angular/platform-browser';
import {APP_BOOTSTRAP_LISTENER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/general-information/header.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SampleComponent} from './components/sample/sample.component';
import {SectorsComponent} from './components/sectors/sectors.component';
import {LocationsComponent} from './components/locations/locations.component';
import {installPackage} from '@angular/cli/tasks/install-package';
import {Sectors} from './model/sectors';
import {ProjectModel} from './model/project-model';
import { InputDirective } from './directives/input.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SampleComponent,
    SectorsComponent,
    LocationsComponent,
    InputDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  // providers: [Sectors, { provide: Sectors, useClass: ProjectModel }],
  providers: [Sectors,[{ provide: ProjectModel, useClass: Sectors }] ],
  bootstrap: [AppComponent]
})

// new ProjectModel("","","",1, null, null, []);
export class AppModule {
}
