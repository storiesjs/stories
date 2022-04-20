import { useState } from 'react';
import {
  StrApp,
  StrSidebar,
  StrPreview,
  StrRenderer,
  StoryComponent,
  StoryContext,
  StrToolBar,
  StrToolZoom,
  StrSplitPane,
  StrTabButton,
  StrLabel,
  StrTab,
  StrTabs,
  StrTabBar,
  StrAddonActions,
  StrAddonControls,
} from '@stories-js/react';

/* Theme variables */
import './variables.css';

import modules from './stories-list';

function Stories() {
  const [story, setStory] = useState<StoryComponent | undefined>();
  const [context, setContext] = useState<StoryContext | undefined>();

  const storyChange = (event: CustomEvent) => {
    console.log('storyChange', event.detail);
    setStory(event.detail);
  }

  const storyContextChange = (event: CustomEvent) => {
    console.log('storyContextChange', event.detail);
    setContext(event.detail);
  }

  return (
    <StrApp modules={modules} onStrChange={storyChange} onStrContextChange={storyContextChange}>
        <StrSplitPane split="horizontal" minSize={150} defaultSize={250}>
          <StrSidebar slot="slot1" />
          <div slot="slot2">
            <StrToolBar>
              <StrToolZoom slot="left" />
            </StrToolBar>
            <StrSplitPane split="vertical" minSize={250} defaultSize={500}>
              <StrPreview slot="slot1">
                <StrRenderer story={story} context={context}/>
              </StrPreview>
              <StrTabs slot="slot2">
                <StrTabBar>
                  <StrTabButton tab="actions">
                    <StrLabel color="primary">Actions</StrLabel>
                  </StrTabButton>
                  <StrTabButton tab="controls">
                    <StrLabel color="primary">Controls</StrLabel>
                  </StrTabButton>
                </StrTabBar>

                <StrTab tab="actions">
                  <StrAddonActions />
                </StrTab>

                <StrTab tab="controls">
                  <StrAddonControls />
                </StrTab>
              </StrTabs>
            </StrSplitPane>
          </div>
        </StrSplitPane>
    </StrApp>
  );
}

export default Stories;