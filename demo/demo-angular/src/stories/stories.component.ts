import type { OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Component } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { StoriesAngularService, StoryComponents } from '@stories/stories-angular';
import type { StoryComponent } from '@stories/stories-angular';

@Component({
  selector: 'app-root',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  stories: StoryComponents = {};
  story: StoryComponent | undefined;

  constructor(private service: StoriesAngularService) {}

  ngOnInit(): void {
      this.stories = this.service.stories;
      console.log('StoriesComponent.stories', this.stories);
      if (this.stories && Object.keys(this.stories).length) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.story = this.stories[Object.keys(this.stories)[0]] as any;
      }
      console.log('StoriesComponent.story', this.story);
  }

  @HostListener('story', ['$event.detail'])
  setStory(event: StoryComponent): void {
    console.log('StoriesComponent.setStory', event);
    this.story = event;
  }
}
