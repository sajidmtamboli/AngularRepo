import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe1'
})
export class Filterpipe1Pipe implements PipeTransform {

  transform(value: any[], searchTearm: any): any[] {
    return value.filter(function(search) 
    {
      return (search.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1)
    })
   
  }
}
