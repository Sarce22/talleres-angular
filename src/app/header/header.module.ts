import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { SearchModule } from '../search/search.module';
import { SearchBarComponent } from '../search/search-bar/search-bar.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    SearchModule
  ],exports:[HeaderComponent, SearchBarComponent
  ]
})
export class HeaderModule { }
