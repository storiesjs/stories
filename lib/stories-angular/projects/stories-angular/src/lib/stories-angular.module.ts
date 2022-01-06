// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders} from '@angular/core';
import { NgModule } from '@angular/core';
import type { StoryModules } from '@stories/stories-common';

import { StoriesApp, StoriesNavigator, StoriesViewer } from './stencil-generated/components';
import { StoriesAngularRendererComponent } from './stories-angular-renderer.component';
import { StoriesAngularService } from './stories-angular.service';

@NgModule({
  declarations: [
    StoriesApp,
    StoriesNavigator,
    StoriesViewer,
    StoriesAngularRendererComponent
  ],
  providers: [
    StoriesAngularService
  ],
  exports: [
    StoriesApp,
    StoriesNavigator,
    StoriesViewer,
    StoriesAngularRendererComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class StoriesAngularModule {

  static withStories(stories: StoryModules): ModuleWithProviders<StoriesAngularModule> {
    const service = new StoriesAngularService();
    service.setStories(stories);

    console.log('StoriesAngularModule', stories)

    return {
      ngModule: StoriesAngularModule,
      providers: [{provide: StoriesAngularService, useFactory: () => service}]
    }
  }
}
