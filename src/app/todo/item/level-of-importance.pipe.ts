import { IMPORTANCE } from './../../login/models/item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'importance'
})
export class LevelOfImportancePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch(value){
      case IMPORTANCE.ASAP:
        {
        return 'ASAP';
      }
      case IMPORTANCE.EMERGENCY:{
        return 'EMERGENCY'
      }
      case IMPORTANCE.LOW:{
        return 'No worries'
      }
      case IMPORTANCE.MEDIUM:{
        return 'Take your time'
      }
    }
  }

}
