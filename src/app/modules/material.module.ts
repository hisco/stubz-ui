import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatListModule,
    MatIconModule
  ]
})
export class MaterialModule { }
