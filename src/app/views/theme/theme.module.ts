// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Kendo UI Components
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule, ExcelModule, PDFModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ColorsComponent } from './colors.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    ButtonsModule,
    GridModule,
    ExcelModule,
    PDFModule,
    DialogModule,
    InputsModule,
    DropDownsModule,
    DateInputsModule,
    LayoutModule,
  ],
  declarations: [
    ColorsComponent,
  ]
})
export class ThemeModule { }
