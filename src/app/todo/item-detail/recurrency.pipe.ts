import { RECURENCY_TYPE } from './../../login/models/item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recurrency'
})
export class RecurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch(value){
      case RECURENCY_TYPE.DAILY:
        {
        return 'DAILY';
      }
      case RECURENCY_TYPE.MONTHLY:
        {
        return 'DAILY';
      }
      case RECURENCY_TYPE.WEEKLY:
        {
        return 'DAILY';
      }

    }
  }

}
