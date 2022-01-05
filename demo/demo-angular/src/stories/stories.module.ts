import { NgModule } from '@angular/core';
import type { ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoriesApp } from '@stories/stories-angular';
import type { StoryModules } from '@stories/stories-common';

@NgModule({
  declarations: [
    StoriesApp
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
  ],
  exports: []
})
export class StoriesModule {
  static stories: StoryModules = [];

  static withStories(stories: StoryModules): ModuleWithProviders<StoriesModule> {
    StoriesModule.stories = stories;

    // const service = new StoriesService();
    // service.setStories(stories);

    return {
      ngModule: StoriesModule,
      // providers: [{provide: StoriesService, useFactory: () => service}]
    }
  }
}
