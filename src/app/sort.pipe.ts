import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, sortOrder: string, sortProp: string): any {
    if (value.length === 0 || !sortOrder) {
      return value;
    }


    const resultArray = value.sort((a, b) => a[sortProp] > b[sortProp] ? 1 : -1);

    if (sortOrder === 'desc') {
      resultArray.reverse();
    }

    return resultArray;
  }

}
