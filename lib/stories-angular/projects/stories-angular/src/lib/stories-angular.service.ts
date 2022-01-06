import { Injectable } from '@angular/core';
import type { StoryComponents, StoryModules } from '@stories/stories-common';
import { modulesToStories } from '@stories/stories-common';

@Injectable({
  providedIn: 'root'
})
export class StoriesAngularService {
  stories: StoryComponents = {};

  setStories(modules: StoryModules): void {
    this.stories = modulesToStories(modules);
  }
}
