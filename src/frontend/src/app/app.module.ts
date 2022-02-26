import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DndModule } from '@ng-dnd/core';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MMModule } from './mm/mm.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MMModule,
    NgbModule,
    DndModule.forRoot({backend: HTML5Backend }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
