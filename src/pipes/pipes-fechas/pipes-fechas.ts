import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
/**
 * Generated class for the PipesFechasPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'pipesFechas',
})
export class PipesFechasPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string): string {
    value = moment(value).format('DD-M-YYYY');
    // console.log(value);
    return value;
  }
}
