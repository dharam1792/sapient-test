import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'findFilter'
})
export class FindFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return JSON.stringify(it).toLowerCase().includes(searchText);
    });
  }
}