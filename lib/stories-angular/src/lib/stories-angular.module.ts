// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders} from '@angular/core';
import { NgModule } from '@angular/core';
import type { StoryModules } from '@stories/stories-common';

import { StoriesApp, StoriesLayout, StoriesNavigator, StoriesViewer, StoriesToolBar, StoriesToolZoom } from './stencil-generated/components';
import { StoriesAngularRendererComponent } from './stories-angular-renderer.component';
import { StoriesAngularService } from './stories-angular.service';

@NgModule({
  declarations: [
    StoriesApp,
    StoriesLayout,
    StoriesNavigator,
    StoriesViewer,
    StoriesAngularRendererComponent,
    StoriesToolBar,
    StoriesToolZoom,
  ],
  providers: [
    StoriesAngularService
  ],
  exports: [
    StoriesApp,
    StoriesLayout,
    StoriesNavigator,
    StoriesViewer,
    StoriesAngularRendererComponent,
    StoriesToolBar,
    StoriesToolZoom,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class StoriesAngularModule {

  static withStories(modules: StoryModules): ModuleWithProviders<StoriesAngularModule> {
    const service = new StoriesAngularService();
    service.setModules(modules);

    console.log('StoriesAngularModule', modules)

    return {
      ngModule: StoriesAngularModule,
      providers: [{provide: StoriesAngularService, useFactory: () => service}]
    }
  }
}
