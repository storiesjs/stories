import './App.css';
import './stories-app';
import { StoriesReactRenderer, useStories } from './stories-app';

// import '@stories/app';
import * as ViewStories from './View.stories';

const modules = [ViewStories];

function Stories() {
  const [storiesAppRef, story] = useStories(modules);
  
  return (
    <stories-app ref={storiesAppRef}>
      <stories-navigator slot="navigator"></stories-navigator>
      <stories-viewer slot="viewer">
        { story && <StoriesReactRenderer story={story}/> }
      </stories-viewer>
    </stories-app>
  );
}

export default Stories;
