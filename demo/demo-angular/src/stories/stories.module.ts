import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoriesAngularModule } from '@stories-js/angular';

import { ButtonModule } from '../app/button/button.module';

import modules from './stories-list';
import { StoriesComponent } from './stories.component';

@NgModule({
  declarations: [
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    StoriesAngularModule.withStories(modules),
    ButtonModule
  ],
  bootstrap: [StoriesComponent],
})
export class StoriesModule {}
