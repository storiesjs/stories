import { h, VNode } from 'preact';

import { StoryObjects } from './types';

interface Props {
    bgColor?: string;
    stories: StoryObjects;
}

export default function StoriesNavigator({bgColor, stories}: Props): VNode {
    return (
        <nav style={{ flexShrink: 0, height: '100vh', width: '200px', backgroundColor: bgColor }}>
            <h1>Navigation</h1>
            <ul>
                {
                    Object.keys(stories).map(key => {
                        const story = stories[key];
                        return <li key={key}><a href={`/#path=${key}`}>{story.storyName}</a></li>
                    })
                }
            </ul>
        </nav>
    );
}
