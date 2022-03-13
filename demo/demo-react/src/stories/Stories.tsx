import { useState } from 'react';
import {
  StoriesApp,
  StoriesSidebar,
  StoriesPreview,
  StoriesReactRenderer,
  StoryComponent,
  StoryContext,
  StoriesToolBar,
  StoriesToolZoom,
  StoriesSplitPane,
  StoriesTabButton,
  StoriesLabel,
  StoriesTab,
  StoriesTabs,
  StoriesTabBar,
  StoriesAddonActions,
  StoriesAddonControls,
} from '@stories-js/stories-react';

/* Theme variables */
import './variables.css';

import modules from './stories-list';
// import { StoriesReactRenderer } from './StoriesReactRenderer';

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
    <StoriesApp modules={modules} onStoryChange={storyChange} onStoryContextChange={storyContextChange}>
        <StoriesSplitPane split="horizontal" minSize={150} defaultSize={250}>
          <StoriesSidebar slot="slot1" />
          <div slot="slot2">
            <StoriesToolBar>
              <StoriesToolZoom slot="left" />
            </StoriesToolBar>
            <StoriesSplitPane split="vertical" minSize={250} defaultSize={500}>
              <StoriesPreview slot="slot1">
                <StoriesReactRenderer story={story} context={context}/>
              </StoriesPreview>
              <StoriesTabs slot="slot2">
                <StoriesTabBar>
                  <StoriesTabButton tab="actions">
                    <StoriesLabel color="primary">Actions</StoriesLabel>
                  </StoriesTabButton>
                  <StoriesTabButton tab="controls">
                    <StoriesLabel color="primary">Controls</StoriesLabel>
                  </StoriesTabButton>
                </StoriesTabBar>

                <StoriesTab tab="actions">
                  <StoriesAddonActions />
                </StoriesTab>

                <StoriesTab tab="controls">
                  <StoriesAddonControls />
                </StoriesTab>
              </StoriesTabs>
            </StoriesSplitPane>
          </div>
        </StoriesSplitPane>
    </StoriesApp>
  );
}

export default Stories;