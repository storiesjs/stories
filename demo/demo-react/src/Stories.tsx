import { useState } from 'react';
import { StoriesApp, StoriesNavigator, StoriesViewer, StoriesReactRenderer, StoryComponent, StoriesLayout, StoriesToolBar, StoriesToolZoom } from '@stories/stories-react';

import './App.css';

import modules from './stories-list';

function Stories() {
  const [story, setStory] = useState<StoryComponent | undefined>();
  
  const storySelected = (event: CustomEvent) => { 
    console.log('storySelected', event.detail);
    setStory(event.detail);
  }

  return (
    <StoriesApp modules={modules} onStory={storySelected}>
      <StoriesLayout>
        <StoriesNavigator slot="navigator"/>
        <StoriesViewer slot="viewer">
          <StoriesReactRenderer story={story}/>
        </StoriesViewer>
        <StoriesToolBar slot="toolbar">
          <StoriesToolZoom slot="left"/>
        </StoriesToolBar>
      </StoriesLayout>
    </StoriesApp>
  );
}

export default Stories;
