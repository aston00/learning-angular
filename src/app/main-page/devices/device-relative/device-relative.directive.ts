import { Directive,OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  //if it's not wrapped - it becomes element 
  //if it's wrapped in square brackets - it becomes attribute
  selector: '[appDeviceRelative]'
})
//Directive has only OnInit and OnDestroy hooks
export class DeviceRelativeDirective implements OnInit {
 //CUstom property binding
 @Input() defaultColor: string = 'transparent';
 @Input() highlightColor: string = 'blue';

//We can also use this/ In brackets we define to which property of the hosting element we want to bind it. After what we do in HostLIsteners applying. Also need to have initial value
//Hardcoded way @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
//Dynamic way
@HostBinding('style.backgroundColor') backgroundColor: string;
  //element => element where we put directive, Type ELementRef should be !!!
  // constructor(private element: ElementRef) { }

  //Better way with Renderer2 to access element
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  
  ngOnInit(){
    this.backgroundColor = this.defaultColor;

    //Good way Renderer gives us default methods/ Element, property, value, 2 flex options(e.g. !important)
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');


    //Bad practice to get access to the element directly as below cause it works only with accessing DOM( inbrowser only)
    // this.element.nativeElement.style.backgroundColor = 'blue';
    // this.element.nativeElement.style.color = "white";
  }

   //To react to some events on the element we have this attr built on we need to use HostListener decorator
   @HostListener('mouseleave') mouseleave (eventData: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
    //Hardcoded this.backgroundColor = 'blue';
    //Dynamic
    this.backgroundColor = this.highlightColor;
  }
   @HostListener('mouseover') mouseover (eventData: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
    this.backgroundColor = this.defaultColor;
  }


  
}
