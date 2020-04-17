import '../src/main/webapp/jsbundles/base-styles-v2.css';
import '../src/main/webapp/css/color.css';
import '../src/main/webapp/css/responsive-grid.css';

export default {
  title: 'Demo',
};

export const Heading = () => '<h1>Hello World</h1>';


// export const Button = () => {
//   function createButton(text, classes = '') {
//     return `<span class="yui-button ${classes}"><button>${text}</text></span>`
//   }

//   // const span = document.createElement('span');
//   // span.classList.add('yui-button', 'primary')
//   // const btn = document.createElement('button');
//   // btn.type = 'button';
//   // btn.innerText = 'Hello Button';
//   // btn.addEventListener('click', e => console.log(e));

//   // span.appendChild(btn);
//   // return span;

//   const ret =  `
//     <span class="yui-button primary"><button>Primary</button></span>
//     <span class="yui-button"><button>Secondary</button></span>
//     <span class="yui-button danger"><button>Danger</button></span>
//     <span class="yui-button link-button"><button>Link</button></span>
//   `
//   console.log(ret)
//   return ret
// };
