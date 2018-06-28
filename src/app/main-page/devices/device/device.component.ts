import { DevicesService } from './../device-relative/devices.service';

import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
// @Input('devices') devices;
deviceName: string;
devices: Array<string>;

// @Output() addDevice = new EventEmitter();
// @Output() removeDevice = new EventEmitter();

// @Input('addDevice') addDevice: any;
//If we want to use the input function from the upper ceomopnent here - we have to use newEventEmitter() function
// deviceName = 'hello';
// @Output() addDevice = new EventEmitter();
@Output() checking = new EventEmitter();
  constructor(private devicesService: DevicesService) { }

  ngOnInit() {
    this.devices = this.devicesService.devices;
  }

  onAddDevice(){
    // this.addDevice.emit(this.deviceName);

    //through services
    this.devicesService.addDevice(this.deviceName);
    
  }

  check(){
    this.checking.emit();
  }

  
  onRemoveDevice(deviceName){
    // this.removeDevice.emit(deviceName);

    //through service
    this.devicesService.removeDevice(deviceName);

  }
//   onAddServer(){
//     this.addDevice.emit(this.deviceName); 
//   }

//   showco(dev){
//     this.disp.emit(dev);
//   }

}
