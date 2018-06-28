import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]'
})
export class StructuralDirectiveDirective {
  //whenever unless input changes we want to execute a method, which we use as a setter
  @Input() set appStructuralDirective (devices){
    if(devices){
      //createEmbeddedView creates a view in this container. Template is our template
      this.viewRef.createEmbeddedView(this.template);
    } else {
      //remove everything from the place in the DOM
      this.viewRef.clear();
    }
  }

  //Injecting template(what to render) and view container(where to render it)
  constructor(private template: TemplateRef<any>,private viewRef: ViewContainerRef ) { 

  }

}
