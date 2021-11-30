import { ModuleExports } from './stories-react';
import './App.css';
import { StoriesViewer } from './stories-react/StoriesViewer';
import * as ViewStories from './View.stories';

const modules: ModuleExports = [
  ViewStories
];

function Stories() {
  return (
    <div className="App">
      <StoriesViewer modules={modules}/>
    </div>
  );
}

export default Stories;
