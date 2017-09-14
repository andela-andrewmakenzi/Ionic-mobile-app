import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { SearchresultsComponent } from './searchresults/searchresults.component';

@NgModule({
  declarations: [
    SearchresultsComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    SearchresultsComponent
  ]
})
export class ComponentsModule {}
