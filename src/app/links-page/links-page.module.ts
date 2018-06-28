import { LinksService } from './links-page-dependencies/links.service';
import { LinksPageComponent } from './links-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LinksPageComponent,

  ],
  providers: [
    LinksService
  ],
  exports: [LinksPageComponent]
})
export class LinksPageModule { }
