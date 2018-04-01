import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleComponent } from '../../components/article/article.component';
import { FooterComponent } from '../../components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ArticleComponent,
    FooterComponent
  ],
  exports: [
    ArticleComponent,
    FooterComponent
  ]
})

export class SharedModule { }
