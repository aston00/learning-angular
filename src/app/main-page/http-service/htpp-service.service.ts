import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
@Injectable()
export class HtppServiceService {

  //passing httpService here to be able to send requests
  constructor(private http: Http) { }

  getData(){
    //This is observable which wil listen to data and create data changes
    // this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1');
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  storeData(data){
    //Headers object to attach headers
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    //3-rd arguments in post request is headers, 2-nd is data
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data, {headers});
  }
  changeData(data){
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    //3-rd arguments in post request is headers
    return this.http.put('https://jsonplaceholder.typicode.com/posts/1', data, {headers});
  }
}
