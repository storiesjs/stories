import { LitState } from 'lit-element-state';
import { StoryObject, StoryObjects } from './types';

export type StoriesStateType = {
    stories: StoryObjects,
    story: StoryObject | undefined
};

class StoriesState extends LitState {
    static get stateVars(): StoriesStateType {
        return {
            stories: {} as StoryObjects,
            story: undefined
        };
    }
}

export const storiesState = new StoriesState();