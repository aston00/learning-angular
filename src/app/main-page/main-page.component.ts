import { Component, OnInit } from '@angular/core';
import { HtppServiceService } from './http-service/htpp-service.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private dataService: HtppServiceService) { }

  ngOnInit() {
    

    this.dataService.storeData({iad: '2'}).subscribe(
      (res) => console.log(res)
    )

    this.dataService.changeData({id: 98, title: 'asdqweqwe'}).subscribe(
      (response: Response) => console.log(response) 
    )

    this.dataService.getData().subscribe(
      (response : Response) => console.log(response.json())
    )
  }



  check(): void {
    console.log('checking if works');
  }

}
