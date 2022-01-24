import { useState } from 'react';
import {
  StoriesApp,
  StoriesSidebar,
  StoriesPreview,
  StoriesReactRenderer,
  StoryComponent,
  StoriesToolBar,
  StoriesToolZoom,
  StoriesSplitPane,
  StoriesTabButton,
  StoriesLabel,
  StoriesTab,
  StoriesTabs,
  StoriesTabBar,
  StoriesAddons,
  StoriesAddonActions,
  StoriesAddonControls,
} from '@stories/stories-react';

/* Theme variables */
import './variables.css';

import modules from './stories-list';

function Stories() {
  const [story, setStory] = useState<StoryComponent | undefined>();

  const storyChange = (event: CustomEvent) => {
    console.log('storyChange', event.detail);
    setStory(event.detail);
  }

  return (
    <StoriesApp modules={modules} onStoryChange={storyChange}>
      <StoriesAddons>
        <StoriesSplitPane split="horizontal" minSize={150} defaultSize={250}>
          <StoriesSidebar slot="slot1" />
          <div slot="slot2">
            <StoriesToolBar>
              <StoriesToolZoom slot="left" />
            </StoriesToolBar>
            <StoriesSplitPane split="vertical" minSize={250} defaultSize={500}>
              <StoriesPreview slot="slot1">
                <StoriesReactRenderer story={story} />
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
      </StoriesAddons>
    </StoriesApp>
  );
}

export default Stories;