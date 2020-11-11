import { Pipe, PipeTransform } from "@angular/core";
import moment from "jalali-moment";

@Pipe({
  name: "ConvertToPersianDate"
})
export class ConvertToPersianDatePipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      value = moment(value)
        .locale("fa")
        .format("YYYY/MM/DD");
      return value;
    } else {
      return null;
    }
  }
}
