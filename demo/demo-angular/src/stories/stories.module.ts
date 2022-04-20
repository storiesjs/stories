import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoriesRendererModule } from '@stories-js/angular';

import { ButtonModule } from '../app/button/button.module';

import modules from './stories-list';
import { StoriesComponent } from './stories.component';

@NgModule({
  declarations: [
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    StoriesRendererModule.withStories(modules),
    ButtonModule
  ],
  bootstrap: [StoriesComponent],
})
export class StoriesModule {}
