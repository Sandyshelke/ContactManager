import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { EditContactComponent } from './contact/edit-contact/edit-contact.component';
import { RemContactComponent } from './contact/rem-contact/rem-contact.component';
import { NewContactComponent } from './contact/new-contact/new-contact.component';
import { RouterModule } from '@angular/router';
import { FeatureRoutingModule } from './feature-routing.module';
import { DetailContactComponent } from './contact/detail-contact/detail-contact.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContactComponent,
    NewContactComponent,
    EditContactComponent,
    RemContactComponent,
    DetailContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FeatureRoutingModule,
    SharedModule
  ]
})
export class FeatureModule { }
