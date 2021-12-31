import { FC, createElement, useRef } from "react";
import Frame from 'react-frame-component';
import { config } from '../stories-api';

export type StoriesReactRendererProps = {
    story: any;
};

export const StoriesReactRenderer: FC<StoriesReactRendererProps> = ({ story }) => {
    const frame = useRef<any>(null);

    const contentDidMount = () => {
        frame.current.node.height = '100%';
        frame.current.node.width = '100%';
    };


    const { decorators, parameters, storyContext } = story;

    const renderComponent = (parameters: any) => {
        return createElement(story.story, { ...parameters });
    };

    const renderDecorators = () => {
        if (decorators && decorators.length) {
            return decorators[0](() => renderComponent(parameters), storyContext);
        }
        return renderComponent(parameters);
    };

    return (
        <Frame id="story"
            contentDidMount={contentDidMount}
            initialContent={config.initialContent}
            mountTarget={`#${config.mountTargetId}`}
            ref={frame}>
            {renderDecorators()}
        </Frame>
    );
};