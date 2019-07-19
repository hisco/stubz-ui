import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpControlService} from "./services/http-control.service";
import { PluginsListComponent } from './components/plugins-list/plugins-list.component';
import { PluginComponent } from './components/plugin/plugin.component';
import {MaterialModule} from "./modules/material.module";

@NgModule({
  declarations: [
    AppComponent,
    PluginsListComponent,
    PluginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [HttpControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
