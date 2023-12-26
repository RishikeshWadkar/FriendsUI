import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    var birthYearInNumber: number = value;
    let currentYear = new Date().getFullYear();
    let birthYear = new Date(birthYearInNumber).getFullYear();
    return currentYear;
  }
}
