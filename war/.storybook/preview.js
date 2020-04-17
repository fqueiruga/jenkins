import { addParameters } from '@storybook/html';

const SOURCE_REGEX = /^\(\) => [`'"](.*)['`"]$/;

addParameters({
  docs: {
    iframeHeight: '200px',
    formatSource: (src) => {
      const match = SOURCE_REGEX.exec(src);
      return match ? match[1] : src;
    },
  },
});
