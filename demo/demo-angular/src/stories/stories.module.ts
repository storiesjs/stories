import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoriesAngularModule } from '@stories/stories-angular';
import type { StoryModules } from '@stories/stories-common';

// import * as ButtonStories from '../app/button/button.component.stories';
import { ButtonModule } from '../app/button/button.module';

import modules from './stories-list';
import { StoriesComponent } from './stories.component';

// const modules: StoryModules = [ButtonStories as unknown as StoryModule];

@NgModule({
  declarations: [
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    StoriesAngularModule.withStories(modules as unknown as StoryModules),
    ButtonModule
  ],
  bootstrap: [StoriesComponent]
})
export class StoriesModule {}
