import JSZip from 'jszip/dist/jszip.min.js';
import { createCode } from './qrcode';

export function saveAsZip (items, filename) {
  const zip = new JSZip();
  const img = zip.folder("pngs");

  for(const item of items) {
    const { text, entryName, opt } = item;
    const canvas = createCode({ ...opt, text });
    const dataURL = canvas.toDataURL("image/png");
    const imgData = dataURL.split(',');
    img.file(`${entryName}.png` ,imgData[1], { base64: true });
  }
  
  zip.generateAsync({type:"blob"}).then(function(blob) {
      const url = window.URL.createObjectURL(blob);
      const arch = document.createElement("a");
      arch.setAttribute('href', url);
      arch.setAttribute('download', `${filename}.zip`);
      arch.click();
  });
};

export function createQRCode (opt, text) {
  const content = createCode({ ...opt, text });
  return content;
};