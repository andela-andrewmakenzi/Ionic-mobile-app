import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { RepositoryComponent } from './repository/repository';

@NgModule({
  declarations: [
    SearchresultsComponent,
    RepositoryComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    SearchresultsComponent,
    RepositoryComponent
  ]
})
export class ComponentsModule {}
