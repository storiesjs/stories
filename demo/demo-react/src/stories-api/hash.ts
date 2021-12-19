import { type } from ".";

// Get a URL hash, return the path.
export function getPath() {
    const hash = window.location.hash;
    const match = /#.*path=(?<path>[^&]+)/.exec(hash || "");
    return match?.groups?.path;
}

export function getDefaulthPath(stories: type.StoryObjects) {
    return stories ? Object.keys(stories) ? Object.keys(stories)[0] : undefined : undefined;
}

export function setPath(value: string | undefined) {
    document.location.hash = `#path=${value ? value : ''}`;
}