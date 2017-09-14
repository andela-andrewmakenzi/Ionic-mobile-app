import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchresultsPage } from './searchresults';
import { GithubServiceProvider } from '../../providers/github-service/github-service';

@NgModule({
  declarations: [
    SearchresultsPage,
  ],
  providers: [
    GithubServiceProvider
  ],
  imports: [
    IonicPageModule.forChild(SearchresultsPage),
  ],
})
export class SearchresultsPageModule {}
