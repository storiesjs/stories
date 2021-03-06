import type { OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Component } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { StoriesAngularService } from '@stories-js/angular';
import type { StoryComponent } from '@stories-js/angular';
import type { StoryContext, StoryModules } from '@stories-js/core';

@Component({
  selector: 'app-root',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  modules: StoryModules = [];
  story: StoryComponent | undefined;
  context: StoryContext | undefined;

  constructor(private service: StoriesAngularService) {}

  ngOnInit(): void {
      this.modules = this.service.modules;
      console.log('StoriesComponent.modules', this.modules);
  }

  @HostListener('storyChange', ['$event.detail'])
  setStory(story: StoryComponent): void {
    console.log('StoriesComponent.setStory', story);
    this.story = story;
  }

  @HostListener('storyContextChange', ['$event.detail'])
  setContext(context: StoryContext): void {
    console.log('StoriesComponent.setContext', context);
    this.context = context;
  }
}
