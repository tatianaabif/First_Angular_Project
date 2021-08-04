import { ExempleModule } from './exemple/exemple.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BindingTwoWayComponent } from './components/binding-two-way/binding-two-way.component';
import { FormsModule } from '@angular/forms';
import { BindingEventComponent } from './components/binding-event/binding-event.component';
import { PipesDateComponent } from './components/pipes-date/pipes-date.component';
import { FrenchMonthPipe } from './Pipes/french-month.pipe';
import { PipesJsonComponent } from './components/pipes-json/pipes-json.component';
import { DirectCompComponent } from './components/direct-comp/direct-comp.component';
import { DirectStructComponent } from './components/direct-struct/direct-struct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BindingTwoWayComponent,
    BindingEventComponent,
    PipesDateComponent,
    FrenchMonthPipe,
    PipesJsonComponent,
    DirectCompComponent,
    DirectStructComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ExempleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
