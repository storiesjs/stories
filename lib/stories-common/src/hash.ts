/**
 * Found the storyId from the URL's hash as defined in the following format:
 *  #path=storiId
 *
 * @returns The storyId or undefined
 */
export function getStoryIdFromUrl(): string | undefined {
    const hash = window.location.hash;
    const match = /#.*path=(?<path>[^&]+)/.exec(hash || "");
    return match?.groups?.path;
}

/**
 * Set story Id on URL's hash as following:
 *  #path=storiId
 *
 * @param storyId The storyId
 */
export function setStoryIdInUrl(storyId: string | undefined): void {
    window.location.hash = `#path=${storyId ? storyId : ''}`;
}
