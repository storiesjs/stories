import type { StoryComponents } from ".";

// Get a URL hash, return the path.
export function getStoryIdFromUrl(): string | undefined {
    const hash = window.location.hash;
    const match = /#.*path=(?<path>[^&]+)/.exec(hash || "");
    return match?.groups?.path;
}

export function getFirstStoryId(stories: StoryComponents): string | undefined {
    return stories ? Object.keys(stories) ? Object.keys(stories)[0] : undefined : undefined;
}

export function setStoryIdInUrl(value: string | undefined): void {
    document.location.hash = `#path=${value ? value : ''}`;
}