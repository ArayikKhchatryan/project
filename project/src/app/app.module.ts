import {BrowserModule} from '@angular/platform-browser';
import {APP_BOOTSTRAP_LISTENER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/general-information/header.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SampleComponent} from './components/sample/sample.component';
import {SectorsComponent} from './components/sectors/sectors.component';
import {LocationsComponent} from './components/locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SampleComponent,
    SectorsComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
