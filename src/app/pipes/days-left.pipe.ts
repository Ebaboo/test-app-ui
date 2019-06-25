import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysLeft',
  pure: true
})
export class DaysLeftPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const dayCount = 0;
    if (value) {
      const unixDiff = (new Date(value).getTime() / 1000) - (Math.round((new Date()).getTime() / 1000));
      return Math.round(unixDiff / 86400);
    }
    return value;
  }

}
