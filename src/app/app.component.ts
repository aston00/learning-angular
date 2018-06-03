//ng g c components_name


import { CoursesService } from './courses.service';
import { Component } from '@angular/core';
//for ngModel


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //We need to create this variable here. Same as $onInit = ... ctrl.courses = '';
  courses;


  //For custom pipe
  text='asda sd asd qw eqwe ads asd wqwd sad asd asd qwqd wdasd asd asdasdqweqwdasd rtg rt gasd asd';

  
  //For two-way building 
  inputValue;

  //Here we create instances of our services
  //In constructor we ask angular to make instance of this service => so we add parameter called service of CoursesService type . Angular sees that we need instance of this service, it creates instance of it and passes here in constructor. It prevents us from modifying all places where we used let service = new CoursesService(); if Service will need parameter => CoursesService(param)
  constructor(service: CoursesService){
    //This is bad 
    // let service = new CoursesService();

    this.courses = service.getCourses();
  }
  
  imageUrl = 'https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
  title = 'Maximka smoget';

  colspan = 2;
   
  isActive = true;

  //For two-way building 
  twoWay(){
    console.log(this.inputValue);
  }

  onSave(e){
    e.stopPropagation();
    console.log('btn clicked');
  }

  onKeyup(e){
    //Enter pressed
    if(e.keyCode == 13){
      console.log('enter pressed', e.target.value);
    }
  }

  onEmail(email){
    console.log(email);
  }

  divClicked() {
    console.log('div clicked');
  }
}
