import { DevicesService } from './device-relative/devices.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-devices',
    templateUrl: './devices.component.html',
    styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
    @Output() check = new EventEmitter();
    public devices: Array<string>;
    deviceService;
    constructor(deviceService: DevicesService) {
        this.devices = deviceService.getDevices();
        this.deviceService = deviceService;
    }

    ngOnInit() {

    }

    checking() {
        this.check.emit();
    }



    addNewDevice(newDevice: string) {
        this.devices = this.deviceService.addDevice(newDevice);
    };

    removeDevice(deviceName: string) {
        this.devices = this.deviceService.removeDevice(deviceName);
        // this.devices = this.devices.filter(device => device !== deviceName);
    };





}
