// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import type { StoryModules } from '@stories-js/core';

import {
  StrAddonActions,
  StrAddonControls,
  StrAddons,

  StrApp,

  StrIcon,
  StrLabel,
  StrPreview,
  StrSidebar,
  StrSplitPane,
  StrTab,
  StrTabBar,
  StrTabButton,
  StrTabs,
  StrToolBar,
  StrToolButton,
  StrToolZoom,
  StrZoom

} from '../directives/proxies';

import { StoriesRendererComponent } from './stories-renderer.component';
import { StoriesRendererService } from './stories-renderer.service';

@NgModule({
  declarations: [
    StrAddonActions,
    StrAddonControls,
    StrAddons,

    StrApp,

    StrIcon,
    StrLabel,
    StrPreview,
    StrSidebar,
    StrSplitPane,
    StrTab,
    StrTabBar,
    StrTabButton,
    StrTabs,
    StrToolBar,
    StrToolButton,
    StrToolZoom,
    StrZoom,

    StoriesRendererComponent,
  ],
  providers: [
    StoriesRendererService
  ],
  exports: [
    StrAddonActions,
    StrAddonControls,
    StrAddons,

    StrApp,

    StrIcon,
    StrLabel,
    StrPreview,
    StrSidebar,
    StrSplitPane,
    StrTab,
    StrTabBar,
    StrTabButton,
    StrTabs,
    StrToolBar,
    StrToolButton,
    StrToolZoom,
    StrZoom,

    StoriesRendererComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class StoriesRendererModule {

  static withStories(modules: StoryModules): ModuleWithProviders<StoriesRendererModule> {
    const service = new StoriesRendererService();
    service.setModules(modules);

    console.log('StoriesRendererModule', modules)

    return {
      ngModule: StoriesRendererModule,
      providers: [{ provide: StoriesRendererService, useFactory: () => service }]
    }
  }
}
