import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { StoriesAngularService } from '@stories/stories-angular';
import type { StoryComponent, StoryComponents } from '@stories/stories-common';

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
        this.story = this.stories[Object.keys(this.stories)[0]];
      }
      console.log('StoriesComponent.story', this.story);
  }
}
