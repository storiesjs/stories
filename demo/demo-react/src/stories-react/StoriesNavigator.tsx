import { StoryObjects } from ".";

export function StoriesNavigator({stories}:{stories: StoryObjects}) {
    return (
        <nav style={{ flexShrink: 0, height: '100vh', width: '200px', backgroundColor: "lightblue" }}>
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