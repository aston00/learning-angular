import { MainPageModule } from './main-page/main-page.module';
// import { MainPageModule } from 'MainPageModule';
import { TruncatePipe } from './truncate.pipe';
// import { CoursesService } from './main-page/devices/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//For two-way data binding
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
// import { DevicesComponent } from './main-page/devices/devices.component';
// import { DeviceComponent } from './main-page/devices/device/device.component';
// import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  //All components and Pipes that module usese go here
  declarations: [
    TruncatePipe,
    AppComponent,
    // DevicesComponent,
    // DeviceComponent,
    // MainPageComponent
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MainPageModule
  ],
  //pass all dependencies that current module is dependent on here(services, factories). Angular will create single instance of this dependencies to the memory => SINGLETON
  providers: [
    // CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
