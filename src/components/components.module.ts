import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchresultsComponent } from './searchresults/searchresults';

@NgModule({
  declarations: [
    SearchresultsComponent
  ],
  imports: [
    IonicPageModule.forChild(SearchresultsComponent)
  ],
  exports: [
    SearchresultsComponent
  ]
})
export class ComponentsModule { }
