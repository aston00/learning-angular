import { DevicesService } from './device-relative/devices.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-devices',
    templateUrl: './devices.component.html',
    styleUrls: ['./devices.component.css'],
    //creating new instances which will override the same instance in upper component
    // providers: [DevicesService]
})
export class DevicesComponent implements OnInit {
    @Output() check = new EventEmitter();
    public devices: Array<string>;
    // deviceService;
    constructor(private deviceService: DevicesService) {
        
        // this.deviceService = deviceService;
    }

    ngOnInit() {
        this.devices = this.deviceService.getDevices();
    }

    checking() {
        this.check.emit();
    }



    addNewDevice(newDevice: string) {
        this.deviceService.addDevice(newDevice);
    };

    removeDevice(deviceName: string) {
        this.deviceService.removeDevice(deviceName);
        // this.devices = this.devices.filter(device => device !== deviceName);
    };





}
