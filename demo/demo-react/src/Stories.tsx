import { StoriesApp, StoriesNavigator, StoriesViewer, StoriesReactRenderer } from '@stories/stories-react';
import { modulesToStories, StoryComponent, StoryModules } from '@stories/stories-common';

import './App.css';

import { modules } from './stories-map';
import { useState } from 'react';

const stories = modulesToStories(modules as unknown as StoryModules);
console.log('main', stories)

function Stories() {
  const [story, setStory] = useState<StoryComponent | undefined>();
  
  const storySelected = (event: CustomEvent<StoryComponent>) => { 
    console.log('storySelected', event.detail);
    setStory(event.detail);
  }

  return (
    <StoriesApp stories={stories} onStorySelected={storySelected}>
      <StoriesNavigator slot="navigator"/>
      <StoriesViewer slot="viewer">
        <StoriesReactRenderer story={story}/>
      </StoriesViewer>
    </StoriesApp>
  );
}

export default Stories;
