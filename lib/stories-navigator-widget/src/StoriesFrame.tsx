import { h, VNode } from 'preact';
import { useRef } from 'preact/hooks';

import { StoryObjects } from './types';

interface Props {
    children?: any;
}

export default function StoriesFrame({children}: Props): VNode {
    const frame = useRef(null);

    const onLoad = (evt: Event) => {
        console.log('On Load', evt);
        if (frame.current) {
            let target = frame.current as any;
            let childNodes = target.childNodes;
            if (childNodes.length === 1 && childNodes[0].tagName === 'SLOT') {
                target = childNodes[0];
                childNodes = childNodes[0].childNodes;
            }
            const body = (frame.current as any).contentDocument.body;
            const el = document.createElement("DIV"); // we will mount or nested app to this element
            body.appendChild(el);
            childNodes.forEach(child => {
                console.log(child, child.tagName);
                target.removeChild(child);
                el.appendChild(child)
            });
        }
    };

    return (
        <iframe ref={frame} style={{width: '100%', height: '100%'}} onLoad={onLoad}>
            { children }
        </iframe>
    );
}
