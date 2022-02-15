// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import type { StoryModules } from '@stories/stories-components';

import {
  StoriesAddonActions,
  StoriesAddonControls,
  StoriesAddons,

  StoriesActionBar,
  StoriesActionButton,
  StoriesApp,

  StoriesIcon,
  StoriesLabel,
  StoriesPreview,
  StoriesSidebar,
  StoriesSplitPane,
  StoriesTab,
  StoriesTabBar,
  StoriesTabButton,
  StoriesTabs,
  StoriesToolBar,
  StoriesToolButton,
  StoriesToolZoom,
  StoriesZoom

} from './stencil-generated/components';
import { StoriesAngularRendererComponent } from './stories-angular-renderer.component';
import { StoriesAngularService } from './stories-angular.service';

@NgModule({
  declarations: [
    StoriesAddonActions,
    StoriesAddonControls,
    StoriesAddons,

    StoriesActionBar,
    StoriesActionButton,
    StoriesApp,

    StoriesIcon,
    StoriesLabel,
    StoriesPreview,
    StoriesSidebar,
    StoriesSplitPane,
    StoriesTab,
    StoriesTabBar,
    StoriesTabButton,
    StoriesTabs,
    StoriesToolBar,
    StoriesToolButton,
    StoriesToolZoom,
    StoriesZoom,

    StoriesAngularRendererComponent,
  ],
  providers: [
    StoriesAngularService
  ],
  exports: [
    StoriesAddonActions,
    StoriesAddonControls,
    StoriesAddons,

    StoriesActionBar,
    StoriesActionButton,
    StoriesApp,

    StoriesIcon,
    StoriesLabel,
    StoriesPreview,
    StoriesSidebar,
    StoriesSplitPane,
    StoriesTab,
    StoriesTabBar,
    StoriesTabButton,
    StoriesTabs,
    StoriesToolBar,
    StoriesToolButton,
    StoriesToolZoom,
    StoriesZoom,

    StoriesAngularRendererComponent,
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
      providers: [{ provide: StoriesAngularService, useFactory: () => service }]
    }
  }
}
