import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dialogModal]',
})
export class DialogModalDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
