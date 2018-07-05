import { FormsModule } from '@angular/forms';
import { DevicesService } from './devices/device-relative/devices.service';
import { MainPageComponent } from './main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices/devices.component';
import { DeviceComponent } from './devices/device/device.component';
import { DeviceRelativeDirective } from './devices/device-relative/device-relative.directive';
import { StructuralDirectiveDirective } from './devices/structural-directive/structural-directive.directive';
import { HtppServiceService } from './http-service/htpp-service.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        MainPageComponent,
        DevicesComponent,
        DeviceComponent,
        DeviceRelativeDirective,
        StructuralDirectiveDirective
    ],
    providers: [
        DevicesService,
        HtppServiceService
    ],
    //Exports is necessary when we pass this module into another and we need to export root components of this module, so we can use it in the template of the upper module 
    exports: [
        MainPageComponent
    ],
    bootstrap: [MainPageComponent]
})
export class MainPageModule { }
