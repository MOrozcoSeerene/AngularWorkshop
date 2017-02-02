import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {InfoBoxComponent} from "./info-box/info-box.component";
import {MouseCursorComponent} from "./mouse-cursor/mouse-cursor.component";
import {TitleBoxComponent} from "./title-box/title-box.component";
import {routing} from "./app.routing";
import {BookComponent} from "./book/book.component";
import {BookModule} from "./book/book.module";

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    MouseCursorComponent,
    TitleBoxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BookModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
