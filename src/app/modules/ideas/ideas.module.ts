import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeasRoutingModule } from './ideas-routing.module';
import { IdeasComponent } from './ideas/ideas.component';

@NgModule({
  imports: [
    CommonModule,
    IdeasRoutingModule
  ],
  declarations: [IdeasComponent]
})
export class IdeasModule { }
