import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "FormatToPersianDate"
})
export class FormatToPersianDatePipe implements PipeTransform {
  transform(value: string): string {
    value = value.toString();
    value =
      value.toString().substr(0, 4) +
      "/" +
      value.toString().substr(4, 2) +
      "/" +
      value.toString().substr(6, 2);
    return value;
  }
}
