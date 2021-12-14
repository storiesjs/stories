import habitat from 'preact-habitat';

import Widget from './component';

function init() {
  const _habitat = habitat(Widget);

  /**
   * option 1: render inline
  */
  // _habitat.render({
  //   inline: true,
  //   clean: false
  // });

  /**
   * option 2: render in selector
  */
  _habitat.render({
    selector: '[data-widget-host="viewer"]',
    inline: false,
    clean: true
  });

  /**
   * option 3: render in cleinet specified
  */
  // _habitat.render({
  //   clientSpecified: true,
  //   inline: false,
  //   clean: true
  // });
}

// in development, set up HMR:
if ((module as any).hot) {
  require('preact/devtools'); // enables React DevTools, be careful on IE
  (module as any).hot.accept('./component', () => requestAnimationFrame(init));
}

init();