import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoriesRendererModule } from '@stories-js/angular';
import { defineCustomElements } from '@stories-js/core/loader';

import { ButtonModule } from '../app/button/button.module';

import modules from './stories-list';
import { StoriesComponent } from './stories.component';

defineCustomElements();

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
