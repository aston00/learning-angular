import { EventEmitter } from '@angular/core';

// ng g s service_name
// import {SomeService} from '...';

//Can be @Injectable({providedIn: 'root'})

/* 

we will need this if only service has dependencies in constructor
import { Injectable} from  '@angular/core';
//If we attach service into service the current service has to have some metadata attached to it. When we use @injectable we tell Angular that there may be some service injected into current one
@Injectable()

*/
export class DevicesService {
    devices: Array<string> = ['o365Device', 'o365DeviceAdmin', 'o365DeviceBusiness', 'o365DeviceRandom'];

    //here we inject services other e.g. SomeService
    // constructor(private someService: SomeService) { };

    constructor() { };

    //EVent to update devices array 
    devicesUpdated = new EventEmitter();


    //we use constructor here if only we inject other service
    getDevices() {
        return this.devices;
    };

    addDevice(newDevice) {
        this.devices.push(newDevice);
        // return this.devices;
    };

    removeDevice(deviceIdentificator) {
        this.devices.splice(deviceIdentificator, 1);
        // return this.devices;
    };
};