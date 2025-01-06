import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  standalone: true
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], field: string, reverse: boolean = false): any[] {
    if (!array || !field) {
      return array;
    }

    const sorted = array.sort((a: any, b: any) => {
      const aValue = this.getPropertyValue(a, field);
      const bValue = this.getPropertyValue(b, field);

      if (aValue instanceof Date && bValue instanceof Date) {
        return aValue.getTime() - bValue.getTime();
      }

      if (aValue === null) return 1;
      if (bValue === null) return -1;
      if (aValue === bValue) return 0;
      
      return aValue < bValue ? -1 : 1;
    });

    return reverse ? sorted.reverse() : sorted;
  }

  private getPropertyValue(obj: any, path: string): any {
    return path.split('.').reduce((prev, curr) => {
      return prev ? prev[curr] : null;
    }, obj);
  }
}
