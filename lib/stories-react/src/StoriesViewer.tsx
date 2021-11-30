import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { modulesToStories, ModuleExports, StoryViewer } from ".";
import { StoriesNavigator } from "./StoriesNavigator";

export type StoryViewerProps = {
    modules: ModuleExports,
};

export type Link = {
    hash: string;
    classList: any;
};

// Get a URL hash, return the path.
function getPathFromHash(hash: string | undefined) {
    const match = /#.*path=(?<path>[^&]+)/.exec(hash || "");
    return match?.groups?.path;
}


export const StoriesViewer: FC<StoryViewerProps> = ({ modules }) => {
    const stories = useMemo(() => modulesToStories(modules), [modules]);
    const defaultPath = useMemo(() => {
        return stories ? Object.keys(stories) ? Object.keys(stories)[0] : undefined : undefined
    }, [stories]);
    const [path, setPath] = useState<string | undefined>(getPathFromHash(window.location.hash) || defaultPath);
    const [mountTarget] = useState("story-frame-root");
    const [initialContent] = useState(`<!DOCTYPE html><html><title>Story</title><head></head><body style='height:100%;width: 100%'><div id="${mountTarget}"></div></body></html>`)
    const frame = useRef<any>(null);

    function loadListener() {
        if (frame && frame.current) {
            document.title = frame.current.node.contentDocument?.title || "";
        }
    }

    function hashChangeListener() {
        const _path = getPathFromHash(window.location.hash) || defaultPath;
        console.log('_path', _path)
        setPath(_path);
    }

    useEffect(() => {
        let current;
        if (frame && frame.current) {
            frame.current.node.addEventListener("load", loadListener);
            frame.current.node.height = '100%';
            frame.current.node.width = '100%';
            current = frame.current;
        }
        window.addEventListener("hashchange", hashChangeListener);


        return () => {
            window.removeEventListener("hashchange", hashChangeListener);
            current && current.node.removeEventListener("load", loadListener);
        };
    }, [frame, hashChangeListener]);

    useEffect(() => {
        // Show the indicated story in the frame.
        if (frame && frame.current && frame.current.node.contentDocument && path && frame.current.node.contentDocument.location.pathname !== path) {
            // Use `replace` to avoid affecting browser history.
            frame?.current?.contentWindow?.location.replace(path);
        }
    }, [frame, path]);

    return (
        <div style={{display: 'flex', flexDirection: 'row', height: '100vh', backgroundColor: 'cyan'}}>
            <StoriesNavigator stories={stories}/>
            <section style={{flexShrink: 1, height: '100vh', width: '100%', backgroundColor: 'lightcoral'}}>
            {
                path ? <StoryViewer story={stories[path]} frame={frame} initialContent={initialContent} mountTarget={mountTarget} /> : <div>No story selected</div>
            }
            </section>
        </div>
    );
};