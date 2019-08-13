import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [ 
    NumberOnlyDirective, FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NumberOnlyDirective,
    FilterPipe
  ]
})
export class SharedModule { }
