import { saveAsZip } from '../dist/app.es.js';

window.onStart = function () {
  const items = [
    { // default style
      text: 'https://sankooc.home',
      entryName: 'thedefault',
    },
    {// add ext content
      text: 'https://sankooc.home/custom/阿/욪',
      entryName: 'custom-one',
      opt: {
        padding: {
          top: 20,
          bottom: 50,
          left: 20,
          right: 20
        },
        render: function render(canvas, ctx, opt) {
          ctx.font = '25px serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';
          const tx = 'ext_内容_내용';
          ctx.fillStyle = '#000';
          ctx.fillText(tx, 270, 565);
        }
      }
    },
  ];
  saveAsZip(items, 'combins');
};
