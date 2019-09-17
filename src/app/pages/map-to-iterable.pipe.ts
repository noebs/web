import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToIterable',
  pure: false
})
export class MapToIterablePipe implements PipeTransform {
  transform(dict: Object) {
    return Object.keys(dict).map(key => ({key, val: dict[key]}));
  }
}
