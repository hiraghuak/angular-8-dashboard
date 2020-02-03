import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textdecode'
})
export class TextdecodePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let newStr: string;
    newStr = decodeURIComponent(value);
    return newStr;
  }

}

