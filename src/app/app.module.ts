import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { FormatToPersianDatePipe } from "../_pipes/FormatToPersianDate.pipe";
import { NumberToPersianPipe } from "../_pipes/NumberToPersian.pipe";
import { ConvertToPersianDatePipe } from "../_pipes/ConvertToPersianDate.pipe";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    FormatToPersianDatePipe,
    NumberToPersianPipe,
    ConvertToPersianDatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
