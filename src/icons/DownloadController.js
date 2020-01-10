import { BaseSvg } from 'icons';

export default ({ fill = '#fff', size = '1em', width = size, height = size, ...props }) =>
  BaseSvg({
    svg: `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 64.01"><defs><style>.cls-1{fill:${fill};}</style></defs><title>icon-download-controlled-data</title><path class="cls-1" d="M48,28H46V18A18,18,0,0,0,28,0h-.67A18.3,18.3,0,0,0,10,18.44V28H8a8,8,0,0,0-8,8V56a8,8,0,0,0,8,8H48a8,8,0,0,0,8-8V36A8,8,0,0,0,48,28ZM20,18a8,8,0,0,1,9.18-7.91A8.19,8.19,0,0,1,36,18.29V28H29.78a1.82,1.82,0,0,1,.06.44v8.45c0,.68.39.84.87.36l2.11-2.12a1.84,1.84,0,0,1,2.6,2.61L29.32,44a1.79,1.79,0,0,1-2.57,0l-6.16-6.29a1.84,1.84,0,0,1,2.6-2.61l2.11,2.12c.48.48.87.32.87-.36V28.46a1.81,1.81,0,0,1,.06-.44H20ZM40.9,53.8a2.46,2.46,0,0,1-2.46,2.45H17.56A2.46,2.46,0,0,1,15.1,53.8V48.27a1.84,1.84,0,1,1,3.69,0V52a.61.61,0,0,0,.61.62H36.6a.61.61,0,0,0,.61-.62V48.27a1.84,1.84,0,1,1,3.69,0Z"/></svg>`,
    width,
    height,
    ...props,
  });
