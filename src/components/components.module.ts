import { NgModule } from '@angular/core';
import { TestComponent } from './test/test';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    IonicPageModule.forChild(TestComponent)
  ],
  exports: [
    TestComponent
  ]
})
export class ComponentsModule { }
