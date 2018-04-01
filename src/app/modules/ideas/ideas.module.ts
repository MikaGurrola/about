import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeasRoutingModule } from './ideas-routing.module';
import { IdeasComponent } from './ideas/ideas.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IdeasRoutingModule, 
    SharedModule
  ],
  declarations: [
    IdeasComponent
  ]
})
export class IdeasModule { }
