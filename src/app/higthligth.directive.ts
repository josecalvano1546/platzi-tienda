import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHigthligth]'
})
export class HigthligthDirective {

  constructor(
    element: ElementRef
  ) {
    element.nativeElement.style.backgroundColor = 'red';
   }

}
