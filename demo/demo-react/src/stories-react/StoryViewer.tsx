import { FC } from "react";
import Frame from 'react-frame-component';
import { StoryObject } from ".";
import { StoryRenderer } from "./StoryRenderer";

export type StoryViewerProps = {
  story: StoryObject,
  initialContent: string,
  mountTarget: string,
  frame: any
};

export const StoryViewer: FC<StoryViewerProps> = ({ story, initialContent, mountTarget, frame }) => {
  
  const contentDidMount = () => {
    if (frame && frame.current) {
      frame.current.node.height = '100%';
      frame.current.node.width = '100%';
    }
  };
  
  if (story) {
    return (
      <Frame id="story"
        contentDidMount={contentDidMount}
        initialContent={initialContent}
        mountTarget={`#${mountTarget}`}
        ref={frame}>
        <StoryRenderer story={story} />
      </Frame >
    );
  }

  return null;
};