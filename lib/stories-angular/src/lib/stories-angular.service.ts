import { Injectable } from '@angular/core';
import type { StoryModules } from '@stories/stories-common';

@Injectable({
  providedIn: 'root'
})
export class StoriesAngularService {
  modules: StoryModules = [];

  setModules(modules: StoryModules): void {
    this.modules = modules;
  }
}
