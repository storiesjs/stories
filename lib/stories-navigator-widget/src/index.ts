import register from 'preact-custom-element';

import Widget from './component';

register(Widget, 'stories-navigator', ['bgColor', 'stories']);
//          ^            ^           ^
//          |      HTML tag name     |
//   Component definition      Observed attributes