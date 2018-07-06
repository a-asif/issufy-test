import { BrowserModule }                           from '@angular/platform-browser';
import { NgModule }                                from '@angular/core';

import { AppComponent }                            from './app.component';
import { DashboardComponent }                      from './dashboard/dashboard.component';
import { tableComponent }                          from './tables/tables.component';
import { BrowserAnimationsModule }                 from '@angular/platform-browser/animations';
import { MaterialModule }                          from './material.module';
import { AppRoutingModule }                        from './app-routing.module';
import { HttpClientModule }                        from '@angular/common/http';
import { tableService }                            from './table.service';
import { dialogComponent }                         from './dialog/dialog.component';
import { FormsModule,ReactiveFormsModule }         from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    tableComponent,
    dialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents:[dialogComponent],
  providers: [tableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
