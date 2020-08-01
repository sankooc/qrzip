# (zipping (qr images from text)) in browser


## install
` npm install qrzip `


## usage

``` javascript

import { saveAsZip } from 'qrzip';

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


```


## options

- text
  
    qrcode content

- entry

    zip entry default under pngs folder

- opt
  
    default option

    ```javascript
        {
            width: 500,
            height: 500,
            padding: {
              top: 20,
              bottom: 20,
              left: 20,
              right: 20,
            },
            typeNumber: 4,
            blankColor: '#fffffe',
            colorFn: (isD) => (isD ? '#000000' : '#ffffff'),
            correctLevel: QRErrorCorrectLevel.H,
            render: () => {},
        }
    ```

<hr/>

[![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)](https://github.com/sankooc/qrzip)