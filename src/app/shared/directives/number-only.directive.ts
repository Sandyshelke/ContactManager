import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[numberOnly]'
})
export class NumberOnlyDirective {

  @Input() numberOnly: number;
  //add keys do u want to allow
  specialKeys: Array<string> = [
    'Backspace',
    'Delete',
    'Tab',
    'Escape',
    'Enter',
    'Home',
    'End',
    'ArrowLeft',
    'ArrowRight',
    'Clear',
    'Copy',
    'Paste'
  ];

  constructor(
    private el: ElementRef) { }

  //Add keydown event listener to element who host this directive.
  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {

    if (this.specialKeys.indexOf(event.key) !== -1 ||
      (event.key === 'a' && event.ctrlKey === true) || // Allow: Ctrl+A
      (event.key === 'c' && event.ctrlKey === true) || // Allow: Ctrl+C
      (event.key === 'v' && event.ctrlKey === true) || // Allow: Ctrl+V
      (event.key === 'x' && event.ctrlKey === true) || // Allow: Ctrl+X
      (event.key === 'a' && event.metaKey === true) || // Allow: Cmd+A (Mac)
      (event.key === 'c' && event.metaKey === true) || // Allow: Cmd+C (Mac)
      (event.key === 'v' && event.metaKey === true) || // Allow: Cmd+V (Mac)
      (event.key === 'x' && event.metaKey === true)) // Allow: Cmd+X (Mac)  ) 
    {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if (event.key === ' ' || isNaN(Number(event.key)) || this.el.nativeElement.value.length > (this.numberOnly-1)) {
      event.preventDefault();
    }
    console.log()
  }

  @HostListener('paste', ['$event']) onPaste(event) {
    event.preventDefault();
    let clipText = "";
    if (event.clipboardData !== undefined) {
      clipText = event.clipboardData.getData('text/plain')
    } else {
      clipText = window["clipboardData"].getData('text')
    }
    document.execCommand('insertText', false, clipText.replace(/[^0-9]/g, ''));
  }

  @HostListener('change', ['$event']) onchange(event) {
    if (isNaN(event.target.value))
      this.el.nativeElement.value = parseInt(event.target.value);
  }
}

