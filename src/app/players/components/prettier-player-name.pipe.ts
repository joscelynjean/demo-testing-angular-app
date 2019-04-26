import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettierPlayerName'
})
export class PrettierPlayerNamePipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0, value.indexOf('\\'));
  }

}
