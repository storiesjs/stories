import { enableProdMode } from '@angular/core';
import type { Type } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements } from '@stories-js/core/loader';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { StoriesModule } from './stories/stories.module';


if (environment.production) {
  enableProdMode();
}

let ngModule: Type<unknown>;

if (environment.stories) {
  defineCustomElements(window);
  ngModule = StoriesModule;
} else {
  ngModule = AppModule;
}

platformBrowserDynamic().bootstrapModule(ngModule)
  .catch(err => console.error(err));
