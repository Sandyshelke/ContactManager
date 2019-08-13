import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchWord?: string): any {
    if (!searchWord)
      return items;
    if (!items) return [];
    return items.filter(it => {
      return (it.FirstName.toLowerCase().includes(searchWord.toLowerCase()) || it.LastName.toLowerCase().includes(searchWord.toLowerCase()))
    })
  }

}
