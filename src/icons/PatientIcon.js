import { BaseSvg } from 'icons';

export default ({ fill = '#fff', ...props }) =>
  BaseSvg({
    svg: `<svg id="patient" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 68"><defs><style>.cls-1{fill:${fill};}.cls-2{fill:none;}</style></defs><title>icon-user-patients</title><path class="cls-1" d="M34.5.6a34,34,0,1,0,34,34A34,34,0,0,0,34.5.6Zm0,64a30,30,0,1,1,30-30A30,30,0,0,1,34.5,64.59Z" transform="translate(-0.5 -0.6)"/><circle class="cls-1" cx="33.55" cy="21.72" r="11.11"/><path class="cls-2" d="M39.56,43.66a4.29,4.29,0,0,0-5.57,2,4.29,4.29,0,0,0-5.57-2c-2.14,1-3.16,3.53-1.47,6.52,1.11,2,3,3.51,6.27,6a1.26,1.26,0,0,0,1.54,0c3.25-2.51,5.16-4,6.28-6C42.73,47.19,41.71,44.65,39.56,43.66Z" transform="translate(-0.5 -0.6)"/><path class="cls-1" d="M57.26,51.35a38,38,0,0,0-3.13-7.83,21.67,21.67,0,0,0-5.07-6.38,12.05,12.05,0,0,0-2.72-1.73,7.29,7.29,0,0,0-3.07-.71,4.53,4.53,0,0,0-.52,0H25.35l-.51,0a7.29,7.29,0,0,0-3.07.71c-3.21,1.49-6.35,4.75-8.92,10.37a40.5,40.5,0,0,0-1.84,5,28.71,28.71,0,0,0,6.51,6.69,34.9,34.9,0,0,1,3.18-9.74V59.5a28.39,28.39,0,0,0,26.71.3V47.71c.21.4.41.81.61,1.26a37.77,37.77,0,0,1,2.64,8.86A28.59,28.59,0,0,0,57.26,51.35ZM41,50.18c-1.12,2-3,3.51-6.28,6a1.26,1.26,0,0,1-1.54,0c-3.24-2.51-5.16-4-6.27-6-1.69-3-.67-5.53,1.47-6.52a4.29,4.29,0,0,1,5.57,2,4.29,4.29,0,0,1,5.57-2C41.71,44.65,42.73,47.19,41,50.18Z" transform="translate(-0.5 -0.6)"/></svg>`,
    style: { marginRight: 10 },
    ...props,
  });
