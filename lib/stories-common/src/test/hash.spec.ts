import { getStoryIdFromUrl, setStoryIdInUrl } from "../hash";

describe('hash', () => {

    describe('getStoryIdFromUrl', () => {
        it('should succes to get window, location and hash in order', () => {
            expect(window).toBeDefined();
            expect(window.location).toBeDefined();
            window.location.hash = '#123';
            expect(window.location.hash).toBe('#123');
        });

        it('should return undefined for hash with incorrect path name', () => {
            const hash = '#path12=123';
            window.location.hash = hash;

            const result = getStoryIdFromUrl();

            expect(result).toBeUndefined();
        });

        it('should return undefined for hash with absent path name', () => {
            const hash = '#';
            window.location.hash = hash;

            const result = getStoryIdFromUrl();

            expect(result).toBeUndefined();
        });

        it('should return storyId for hash with correct path name', () => {
            const storyId = "stories-view-component--byname";
            const hash = `#path=${storyId}`;
            window.location.hash = hash;

            const result = getStoryIdFromUrl();

            expect(result).toBe(storyId);
        });
    });

    describe('setStoryIdInUrl', () => {
        it('should set empty path for undefined value', () => {
            setStoryIdInUrl(undefined);

            expect(window.location.hash).toEqual('#path=');
        });

        it('should set storyId path for real value', () => {
            const storyId = "stories-view-component--byname";
            setStoryIdInUrl(storyId);

            expect(window.location.hash).toEqual(`#path=${storyId}`);
        });

    });
});