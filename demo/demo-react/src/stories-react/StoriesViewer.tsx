import { FC, useEffect, useMemo, useRef } from "react";
import { modulesToStories, StoryViewer, StoriesNavigator } from ".";
import { type } from "../stories-api";
import '@stories/navigator-widget';

export type StoryViewerProps = {
    modules: type.ModuleExports,
};

export type Link = {
    hash: string;
    classList: any;
};




export const StoriesViewer: FC<StoryViewerProps> = ({ modules }) => {
    const stories = useMemo(() => modulesToStories(modules), [modules]);
        
    const navigation = useRef(null);

    useEffect(() => {
        if (navigation.current) {
            (navigation.current as any).stories = stories;
        }
    }, [stories]);

    return (
        <div style={{display: 'flex', flexDirection: 'row', height: '100vh', backgroundColor: 'cyan'}}>
            <StoriesNavigator stories={stories} />
            <section style={{flexShrink: 1, height: '100vh', width: '100%', backgroundColor: 'lightcoral'}}>
                <StoryViewer stories={stories} />
            </section>
        </div>
    );
};