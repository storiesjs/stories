import { FC, useCallback, useEffect, useRef, useState } from "react";
import Frame from 'react-frame-component';
import { type } from "../stories-api";
import { hash } from "../stories-api";
import { StoryRenderer } from "./StoryRenderer";
import { config } from '../stories-api';
import { StoriesNotFound } from "./StoriesNotFound";

export type StoryViewerProps = {
  stories: type.StoryObjects,
};

export const StoryViewer: FC<StoryViewerProps> = ({ stories }) => {
  const frame = useRef<any>(null);
  const [story, setStory] = useState<type.StoryObject | undefined>();

  const hashChangeListener = useCallback(() => {
    let _path = hash.getPath() || hash.getDefaulthPath(stories);
    // setPath(_path);
    const _story = _path ? stories[_path] : undefined;
    setStory(_story);
    // We have to update the hash to keep it in sync with API
    hash.setPath(_path);
  }, []);

  useEffect(() => {
    window.addEventListener("hashchange", hashChangeListener);

    return () => {
      window.removeEventListener("hashchange", hashChangeListener);
    };
    // eslint-disable-next-line
  }, []);

  const contentDidMount = () => {
    frame.current.node.height = '100%';
    frame.current.node.width = '100%';
    hashChangeListener();
  };

  return (
    <Frame id="story"
      contentDidMount={contentDidMount}
      initialContent={config.initialContent}
      mountTarget={`#${config.mountTargetId}`}
      ref={frame}>
      {
        story ? <StoryRenderer story={story} /> : <StoriesNotFound/>
      }
    </Frame >
  );
};