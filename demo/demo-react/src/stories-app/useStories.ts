import { modulesToStories } from '../stories-react';
import { StoriesApp } from '../stories-app';
import { useEffect, useRef, useState } from 'react';
import { StoryObject } from './types';

export function useStories(modules: any[]) {
  const storiesAppRef = useRef<StoriesApp>();
  const [story, setStory] = useState<StoryObject | undefined>();

  useEffect(() => {
    let storiesApp: StoriesApp | undefined;

    function storyChanged(event: CustomEvent) {
      setStory(event.detail);
    }

    if (storiesAppRef.current) {
      storiesApp = storiesAppRef.current as StoriesApp;
      storiesApp.addEventListener('StorySelectedEvent', storyChanged);
      storiesApp.stories = modulesToStories(modules);
    }

    return () => {
      if (storiesApp) {
        storiesApp.removeEventListener('StorySelectedEvent', storyChanged);
      }
    };
  }, [storiesAppRef, modules]);

  return [storiesAppRef, story];
}