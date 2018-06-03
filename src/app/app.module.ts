import { TruncatePipe } from './truncate.pipe';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//For two-way data binding
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';


@NgModule({
  //All components and Pipes that module usese go here
  declarations: [
    TruncatePipe,
    AppComponent
    
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  //pass all dependencies that current module is dependent on here(services, factories). Angular will create single instance of this dependencies to the memory => SINGLETON
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
