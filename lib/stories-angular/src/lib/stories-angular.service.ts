import { Injectable } from '@angular/core';
import type { StoryModules } from '@stories-js/stories-components';

@Injectable({
  providedIn: 'root'
})
export class StoriesAngularService {
  modules: StoryModules = [];

  setModules(modules: StoryModules): void {
    this.modules = modules;
  }
}
