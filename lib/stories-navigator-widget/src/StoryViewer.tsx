import { h, VNode } from 'preact';

import { StoryObject } from './types';

interface Props {
    story: StoryObject,
}

export default function StoryViewer({ story }: Props): VNode | null {

    if (story) {
        return (
            <div>Story Viewer: {story.storyName}</div>
        );
    }

    return null;
}
