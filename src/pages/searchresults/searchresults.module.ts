import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SearchresultsPage } from './searchresults';
import { GithubServiceProvider } from '../../providers/github-service/github-service';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SearchresultsPage,
  ],
  providers: [
    GithubServiceProvider
  ],
  imports: [
    IonicPageModule.forChild(SearchresultsPage),
    ComponentsModule
  ],
})
export class SearchresultsPageModule { }
