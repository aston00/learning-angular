
// ng g s service_name

/* 

we will need this if only service has dependencies in constructor
import { Injectable} from  '@angular/core';
@Injectable()

*/
export class DevicesService {
    devices: Array<string> = ['o365Device', 'o365DeviceAdmin', 'o365DeviceBusiness', 'o365DeviceRandom'];
    constructor() {

    };
    //we use constructor here if only we inject other service
    getDevices() {
        return this.devices;
    };

    addDevice(newDevice) {
        this.devices.push(newDevice);
        return this.devices;
    };

    removeDevice(deviceIdentificator) {
        this.devices = this.devices.filter((device, index) => index !== deviceIdentificator);
        return this.devices;
    };
};