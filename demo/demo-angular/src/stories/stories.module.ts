import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoriesAngularModule } from '@stories/stories-angular';
import type { StoryModules, StoryModule } from '@stories/stories-common';

import * as ButtonStories from '../app/button/button.component.stories';
import { ButtonModule } from '../app/button/button.module';

import { StoriesComponent } from './stories.component';

const modules: StoryModules = [ButtonStories as unknown as StoryModule];

@NgModule({
  declarations: [
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    StoriesAngularModule.withStories(modules),
    ButtonModule
  ],
  bootstrap: [StoriesComponent]
})
export class StoriesModule {}
