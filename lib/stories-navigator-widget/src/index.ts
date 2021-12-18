import register from 'preact-custom-element';

import StoriesNavigator from './StoriesNavigator';
import StoryViewer from './StoryViewer';
import StoriesFrame from './StoriesFrame';

register(StoriesNavigator, 'stories-navigator', ['bgColor', 'stories']);
register(StoryViewer, 'story-viewer', ['story']);
register(StoriesFrame, 'stories-frame', ['children'])

export { default as StoriesNavigator } from './StoriesNavigator';
export { default as StoryViewer } from './StoryViewer';
export { default as StoriesFrame } from './StoriesFrame';