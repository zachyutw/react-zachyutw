import React, { useRef, useEffect } from 'react';
import useIsScrolledIntoView from 'react-use-is-scrolled-into-view';
import s from './SvgEffectTitle.module.css';
import styled, { keyframes } from 'styled-components';

const lineAnim = keyframes`to {
        stroke-dashoffset: 0;
    }`;
const StyledSvgEffectTitle = styled.div`
  color: red;
  & [data-inview='false'] path {
    animation: ${lineAnim} 2s ease forwards;
  }
`;

const svgText = ` <svg width='549' height='79' viewBox='0 0 549 79' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <mask id='path-1-outside-1' maskUnits='userSpaceOnUse' x='0.144531' y='0' width='549' height='79' fill='black'>
                    <rect fill='white' x='0.144531' width='549' height='79' />
                    <path d='M21.9805 42.8633L22.9648 49.6133L24.4062 43.5312L34.5312 7.8125H40.2266L50.1055 43.5312L51.5117 49.7188L52.6016 42.8281L60.5469 7.8125H67.332L54.9219 59H48.7695L38.2227 21.6992L37.4141 17.7969L36.6055 21.6992L25.6719 59H19.5195L7.14453 7.8125H13.8945L21.9805 42.8633Z' />
                    <path d='M95.6961 59.7031C90.5398 59.7031 86.3445 58.0156 83.1102 54.6406C79.8758 51.2422 78.2586 46.707 78.2586 41.0352V39.8398C78.2586 36.0664 78.9734 32.7031 80.4031 29.75C81.8562 26.7734 83.8719 24.4531 86.45 22.7891C89.0516 21.1016 91.8641 20.2578 94.8875 20.2578C99.8328 20.2578 103.677 21.8867 106.419 25.1445C109.161 28.4023 110.532 33.0664 110.532 39.1367V41.8438H84.7625C84.8562 45.5938 85.9461 48.6289 88.032 50.9492C90.1414 53.2461 92.8133 54.3945 96.0477 54.3945C98.3445 54.3945 100.29 53.9258 101.884 52.9883C103.477 52.0508 104.872 50.8086 106.067 49.2617L110.04 52.3555C106.852 57.2539 102.071 59.7031 95.6961 59.7031ZM94.8875 25.6016C92.2625 25.6016 90.0594 26.5625 88.2781 28.4844C86.4969 30.3828 85.3953 33.0547 84.9734 36.5H104.028V36.0078C103.841 32.7031 102.95 30.1484 101.356 28.3438C99.7625 26.5156 97.6062 25.6016 94.8875 25.6016Z' />
                    <path d='M157.494 40.4023C157.494 46.2148 156.158 50.8906 153.486 54.4297C150.814 57.9453 147.228 59.7031 142.728 59.7031C137.923 59.7031 134.209 58.0039 131.584 54.6055L131.267 59H125.291V5H131.795V25.1445C134.42 21.8867 138.041 20.2578 142.658 20.2578C147.275 20.2578 150.896 22.0039 153.521 25.4961C156.17 28.9883 157.494 33.7695 157.494 39.8398V40.4023ZM150.99 39.6641C150.99 35.2344 150.134 31.8125 148.423 29.3984C146.712 26.9844 144.252 25.7773 141.041 25.7773C136.752 25.7773 133.67 27.7695 131.795 31.7539V48.207C133.787 52.1914 136.892 54.1836 141.111 54.1836C144.228 54.1836 146.654 52.9766 148.388 50.5625C150.123 48.1484 150.99 44.5156 150.99 39.6641Z' />
                    <path d='M173.94 59V7.8125H188.389C192.842 7.8125 196.78 8.79688 200.202 10.7656C203.623 12.7344 206.26 15.5352 208.112 19.168C209.987 22.8008 210.936 26.9727 210.959 31.6836V34.9531C210.959 39.7812 210.022 44.0117 208.147 47.6445C206.295 51.2773 203.635 54.0664 200.166 56.0117C196.721 57.957 192.702 58.9531 188.108 59H173.94ZM180.69 13.3672V53.4805H187.791C192.995 53.4805 197.038 51.8633 199.92 48.6289C202.827 45.3945 204.28 40.7891 204.28 34.8125V31.8242C204.28 26.0117 202.909 21.5 200.166 18.2891C197.448 15.0547 193.58 13.4141 188.565 13.3672H180.69Z' />
                    <path d='M243.155 59.7031C237.999 59.7031 233.804 58.0156 230.57 54.6406C227.335 51.2422 225.718 46.707 225.718 41.0352V39.8398C225.718 36.0664 226.433 32.7031 227.863 29.75C229.316 26.7734 231.331 24.4531 233.909 22.7891C236.511 21.1016 239.323 20.2578 242.347 20.2578C247.292 20.2578 251.136 21.8867 253.878 25.1445C256.62 28.4023 257.991 33.0664 257.991 39.1367V41.8438H232.222C232.316 45.5938 233.405 48.6289 235.491 50.9492C237.601 53.2461 240.273 54.3945 243.507 54.3945C245.804 54.3945 247.749 53.9258 249.343 52.9883C250.937 52.0508 252.331 50.8086 253.527 49.2617L257.499 52.3555C254.312 57.2539 249.53 59.7031 243.155 59.7031ZM242.347 25.6016C239.722 25.6016 237.519 26.5625 235.738 28.4844C233.956 30.3828 232.855 33.0547 232.433 36.5H251.487V36.0078C251.3 32.7031 250.409 30.1484 248.816 28.3438C247.222 26.5156 245.066 25.6016 242.347 25.6016Z' />
                    <path d='M284.809 50.1758L294.23 20.9609H300.875L287.234 59H282.277L268.496 20.9609H275.141L284.809 50.1758Z' />
                    <path d='M329.626 59.7031C324.47 59.7031 320.274 58.0156 317.04 54.6406C313.805 51.2422 312.188 46.707 312.188 41.0352V39.8398C312.188 36.0664 312.903 32.7031 314.333 29.75C315.786 26.7734 317.802 24.4531 320.38 22.7891C322.981 21.1016 325.794 20.2578 328.817 20.2578C333.763 20.2578 337.606 21.8867 340.348 25.1445C343.091 28.4023 344.462 33.0664 344.462 39.1367V41.8438H318.692C318.786 45.5938 319.876 48.6289 321.962 50.9492C324.071 53.2461 326.743 54.3945 329.977 54.3945C332.274 54.3945 334.22 53.9258 335.813 52.9883C337.407 52.0508 338.802 50.8086 339.997 49.2617L343.97 52.3555C340.782 57.2539 336.001 59.7031 329.626 59.7031ZM328.817 25.6016C326.192 25.6016 323.989 26.5625 322.208 28.4844C320.427 30.3828 319.325 33.0547 318.903 36.5H337.958V36.0078C337.77 32.7031 336.88 30.1484 335.286 28.3438C333.692 26.5156 331.536 25.6016 328.817 25.6016Z' />
                    <path d='M366.287 59H359.783V5H366.287V59Z' />
                    <path d='M382.205 39.6289C382.205 35.9023 382.932 32.5508 384.385 29.5742C385.862 26.5977 387.901 24.3008 390.502 22.6836C393.127 21.0664 396.116 20.2578 399.467 20.2578C404.647 20.2578 408.83 22.0508 412.018 25.6367C415.229 29.2227 416.834 33.9922 416.834 39.9453V40.4023C416.834 44.1055 416.12 47.4336 414.69 50.3867C413.284 53.3164 411.256 55.6016 408.608 57.2422C405.983 58.8828 402.959 59.7031 399.538 59.7031C394.381 59.7031 390.198 57.9102 386.987 54.3242C383.799 50.7383 382.205 45.9922 382.205 40.0859V39.6289ZM388.745 40.4023C388.745 44.6211 389.717 48.0078 391.663 50.5625C393.631 53.1172 396.256 54.3945 399.538 54.3945C402.842 54.3945 405.467 53.1055 407.413 50.5273C409.358 47.9258 410.33 44.293 410.33 39.6289C410.33 35.457 409.334 32.082 407.342 29.5039C405.373 26.9023 402.748 25.6016 399.467 25.6016C396.256 25.6016 393.666 26.8789 391.698 29.4336C389.729 31.9883 388.745 35.6445 388.745 40.4023Z' />
                    <path d='M464.323 40.4023C464.323 46.1914 462.999 50.8555 460.351 54.3945C457.702 57.9336 454.116 59.7031 449.593 59.7031C444.976 59.7031 441.343 58.2383 438.695 55.3086V73.625H432.191V20.9609H438.132L438.448 25.1797C441.097 21.8984 444.777 20.2578 449.487 20.2578C454.058 20.2578 457.667 21.9805 460.316 25.4258C462.987 28.8711 464.323 33.6641 464.323 39.8047V40.4023ZM457.82 39.6641C457.82 35.375 456.905 31.9883 455.077 29.5039C453.249 27.0195 450.741 25.7773 447.554 25.7773C443.616 25.7773 440.663 27.5234 438.695 31.0156V49.1914C440.64 52.6602 443.616 54.3945 447.624 54.3945C450.741 54.3945 453.214 53.1641 455.042 50.7031C456.894 48.2188 457.82 44.5391 457.82 39.6641Z' />
                    <path d='M495.605 59.7031C490.449 59.7031 486.254 58.0156 483.02 54.6406C479.785 51.2422 478.168 46.707 478.168 41.0352V39.8398C478.168 36.0664 478.883 32.7031 480.312 29.75C481.766 26.7734 483.781 24.4531 486.359 22.7891C488.961 21.1016 491.773 20.2578 494.797 20.2578C499.742 20.2578 503.586 21.8867 506.328 25.1445C509.07 28.4023 510.441 33.0664 510.441 39.1367V41.8438H484.672C484.766 45.5938 485.855 48.6289 487.941 50.9492C490.051 53.2461 492.723 54.3945 495.957 54.3945C498.254 54.3945 500.199 53.9258 501.793 52.9883C503.387 52.0508 504.781 50.8086 505.977 49.2617L509.949 52.3555C506.762 57.2539 501.98 59.7031 495.605 59.7031ZM494.797 25.6016C492.172 25.6016 489.969 26.5625 488.188 28.4844C486.406 30.3828 485.305 33.0547 484.883 36.5H503.938V36.0078C503.75 32.7031 502.859 30.1484 501.266 28.3438C499.672 26.5156 497.516 25.6016 494.797 25.6016Z' />
                    <path d='M543.587 26.7969C542.602 26.6328 541.536 26.5508 540.388 26.5508C536.122 26.5508 533.227 28.3672 531.704 32V59H525.2V20.9609H531.528L531.634 25.3555C533.766 21.957 536.79 20.2578 540.704 20.2578C541.97 20.2578 542.93 20.4219 543.587 20.75V26.7969Z' />
                </mask>
                <path
                    d='M21.9805 42.8633L22.9648 49.6133L24.4062 43.5312L34.5312 7.8125H40.2266L50.1055 43.5312L51.5117 49.7188L52.6016 42.8281L60.5469 7.8125H67.332L54.9219 59H48.7695L38.2227 21.6992L37.4141 17.7969L36.6055 21.6992L25.6719 59H19.5195L7.14453 7.8125H13.8945L21.9805 42.8633Z'
                    stroke='#000000'
                    stroke-width='10'
                    mask='url(#path-1-outside-1)'
                />
                <path
                    d='M95.6961 59.7031C90.5398 59.7031 86.3445 58.0156 83.1102 54.6406C79.8758 51.2422 78.2586 46.707 78.2586 41.0352V39.8398C78.2586 36.0664 78.9734 32.7031 80.4031 29.75C81.8562 26.7734 83.8719 24.4531 86.45 22.7891C89.0516 21.1016 91.8641 20.2578 94.8875 20.2578C99.8328 20.2578 103.677 21.8867 106.419 25.1445C109.161 28.4023 110.532 33.0664 110.532 39.1367V41.8438H84.7625C84.8562 45.5938 85.9461 48.6289 88.032 50.9492C90.1414 53.2461 92.8133 54.3945 96.0477 54.3945C98.3445 54.3945 100.29 53.9258 101.884 52.9883C103.477 52.0508 104.872 50.8086 106.067 49.2617L110.04 52.3555C106.852 57.2539 102.071 59.7031 95.6961 59.7031ZM94.8875 25.6016C92.2625 25.6016 90.0594 26.5625 88.2781 28.4844C86.4969 30.3828 85.3953 33.0547 84.9734 36.5H104.028V36.0078C103.841 32.7031 102.95 30.1484 101.356 28.3438C99.7625 26.5156 97.6062 25.6016 94.8875 25.6016Z'
                    stroke='#000000'
                    stroke-width='10'
                    mask='url(#path-1-outside-1)'
                />
                <path
                    d='M157.494 40.4023C157.494 46.2148 156.158 50.8906 153.486 54.4297C150.814 57.9453 147.228 59.7031 142.728 59.7031C137.923 59.7031 134.209 58.0039 131.584 54.6055L131.267 59H125.291V5H131.795V25.1445C134.42 21.8867 138.041 20.2578 142.658 20.2578C147.275 20.2578 150.896 22.0039 153.521 25.4961C156.17 28.9883 157.494 33.7695 157.494 39.8398V40.4023ZM150.99 39.6641C150.99 35.2344 150.134 31.8125 148.423 29.3984C146.712 26.9844 144.252 25.7773 141.041 25.7773C136.752 25.7773 133.67 27.7695 131.795 31.7539V48.207C133.787 52.1914 136.892 54.1836 141.111 54.1836C144.228 54.1836 146.654 52.9766 148.388 50.5625C150.123 48.1484 150.99 44.5156 150.99 39.6641Z'
                    stroke='#000000'
                    stroke-width='10'
                    mask='url(#path-1-outside-1)'
                />
                <path
                    d='M173.94 59V7.8125H188.389C192.842 7.8125 196.78 8.79688 200.202 10.7656C203.623 12.7344 206.26 15.5352 208.112 19.168C209.987 22.8008 210.936 26.9727 210.959 31.6836V34.9531C210.959 39.7812 210.022 44.0117 208.147 47.6445C206.295 51.2773 203.635 54.0664 200.166 56.0117C196.721 57.957 192.702 58.9531 188.108 59H173.94ZM180.69 13.3672V53.4805H187.791C192.995 53.4805 197.038 51.8633 199.92 48.6289C202.827 45.3945 204.28 40.7891 204.28 34.8125V31.8242C204.28 26.0117 202.909 21.5 200.166 18.2891C197.448 15.0547 193.58 13.4141 188.565 13.3672H180.69Z'
                    stroke='#000000'
                    stroke-width='10'
                    mask='url(#path-1-outside-1)'
                />
                <path
                    d='M243.155 59.7031C237.999 59.7031 233.804 58.0156 230.57 54.6406C227.335 51.2422 225.718 46.707 225.718 41.0352V39.8398C225.718 36.0664 226.433 32.7031 227.863 29.75C229.316 26.7734 231.331 24.4531 233.909 22.7891C236.511 21.1016 239.323 20.2578 242.347 20.2578C247.292 20.2578 251.136 21.8867 253.878 25.1445C256.62 28.4023 257.991 33.0664 257.991 39.1367V41.8438H232.222C232.316 45.5938 233.405 48.6289 235.491 50.9492C237.601 53.2461 240.273 54.3945 243.507 54.3945C245.804 54.3945 247.749 53.9258 249.343 52.9883C250.937 52.0508 252.331 50.8086 253.527 49.2617L257.499 52.3555C254.312 57.2539 249.53 59.7031 243.155 59.7031ZM242.347 25.6016C239.722 25.6016 237.519 26.5625 235.738 28.4844C233.956 30.3828 232.855 33.0547 232.433 36.5H251.487V36.0078C251.3 32.7031 250.409 30.1484 248.816 28.3438C247.222 26.5156 245.066 25.6016 242.347 25.6016Z'
                    stroke='#000000'
                    stroke-width='10'
                    mask='url(#path-1-outside-1)'
                />
                <path d='M284.809 50.1758L294.23 20.9609H300.875L287.234 59H282.277L268.496 20.9609H275.141L284.809 50.1758Z' stroke='#000000' stroke-width='10' mask='url(#path-1-outside-1)' />
                <path
                    d='M329.626 59.7031C324.47 59.7031 320.274 58.0156 317.04 54.6406C313.805 51.2422 312.188 46.707 312.188 41.0352V39.8398C312.188 36.0664 312.903 32.7031 314.333 29.75C315.786 26.7734 317.802 24.4531 320.38 22.7891C322.981 21.1016 325.794 20.2578 328.817 20.2578C333.763 20.2578 337.606 21.8867 340.348 25.1445C343.091 28.4023 344.462 33.0664 344.462 39.1367V41.8438H318.692C318.786 45.5938 319.876 48.6289 321.962 50.9492C324.071 53.2461 326.743 54.3945 329.977 54.3945C332.274 54.3945 334.22 53.9258 335.813 52.9883C337.407 52.0508 338.802 50.8086 339.997 49.2617L343.97 52.3555C340.782 57.2539 336.001 59.7031 329.626 59.7031ZM328.817 25.6016C326.192 25.6016 323.989 26.5625 322.208 28.4844C320.427 30.3828 319.325 33.0547 318.903 36.5H337.958V36.0078C337.77 32.7031 336.88 30.1484 335.286 28.3438C333.692 26.5156 331.536 25.6016 328.817 25.6016Z'
                    stroke='#000000'
                    stroke-width='10'
                    mask='url(#path-1-outside-1)'
                />
                <path d='M366.287 59H359.783V5H366.287V59Z' stroke='#000000' stroke-width='10' mask='url(#path-1-outside-1)' />
                <path
                    d='M382.205 39.6289C382.205 35.9023 382.932 32.5508 384.385 29.5742C385.862 26.5977 387.901 24.3008 390.502 22.6836C393.127 21.0664 396.116 20.2578 399.467 20.2578C404.647 20.2578 408.83 22.0508 412.018 25.6367C415.229 29.2227 416.834 33.9922 416.834 39.9453V40.4023C416.834 44.1055 416.12 47.4336 414.69 50.3867C413.284 53.3164 411.256 55.6016 408.608 57.2422C405.983 58.8828 402.959 59.7031 399.538 59.7031C394.381 59.7031 390.198 57.9102 386.987 54.3242C383.799 50.7383 382.205 45.9922 382.205 40.0859V39.6289ZM388.745 40.4023C388.745 44.6211 389.717 48.0078 391.663 50.5625C393.631 53.1172 396.256 54.3945 399.538 54.3945C402.842 54.3945 405.467 53.1055 407.413 50.5273C409.358 47.9258 410.33 44.293 410.33 39.6289C410.33 35.457 409.334 32.082 407.342 29.5039C405.373 26.9023 402.748 25.6016 399.467 25.6016C396.256 25.6016 393.666 26.8789 391.698 29.4336C389.729 31.9883 388.745 35.6445 388.745 40.4023Z'
                    stroke='#000000'
                    stroke-width='10'
                    mask='url(#path-1-outside-1)'
                />
                <path
                    d='M464.323 40.4023C464.323 46.1914 462.999 50.8555 460.351 54.3945C457.702 57.9336 454.116 59.7031 449.593 59.7031C444.976 59.7031 441.343 58.2383 438.695 55.3086V73.625H432.191V20.9609H438.132L438.448 25.1797C441.097 21.8984 444.777 20.2578 449.487 20.2578C454.058 20.2578 457.667 21.9805 460.316 25.4258C462.987 28.8711 464.323 33.6641 464.323 39.8047V40.4023ZM457.82 39.6641C457.82 35.375 456.905 31.9883 455.077 29.5039C453.249 27.0195 450.741 25.7773 447.554 25.7773C443.616 25.7773 440.663 27.5234 438.695 31.0156V49.1914C440.64 52.6602 443.616 54.3945 447.624 54.3945C450.741 54.3945 453.214 53.1641 455.042 50.7031C456.894 48.2188 457.82 44.5391 457.82 39.6641Z'
                    stroke='#000000'
                    stroke-width='10'
                    mask='url(#path-1-outside-1)'
                />
                <path
                    d='M495.605 59.7031C490.449 59.7031 486.254 58.0156 483.02 54.6406C479.785 51.2422 478.168 46.707 478.168 41.0352V39.8398C478.168 36.0664 478.883 32.7031 480.312 29.75C481.766 26.7734 483.781 24.4531 486.359 22.7891C488.961 21.1016 491.773 20.2578 494.797 20.2578C499.742 20.2578 503.586 21.8867 506.328 25.1445C509.07 28.4023 510.441 33.0664 510.441 39.1367V41.8438H484.672C484.766 45.5938 485.855 48.6289 487.941 50.9492C490.051 53.2461 492.723 54.3945 495.957 54.3945C498.254 54.3945 500.199 53.9258 501.793 52.9883C503.387 52.0508 504.781 50.8086 505.977 49.2617L509.949 52.3555C506.762 57.2539 501.98 59.7031 495.605 59.7031ZM494.797 25.6016C492.172 25.6016 489.969 26.5625 488.188 28.4844C486.406 30.3828 485.305 33.0547 484.883 36.5H503.938V36.0078C503.75 32.7031 502.859 30.1484 501.266 28.3438C499.672 26.5156 497.516 25.6016 494.797 25.6016Z'
                    stroke='#000000'
                    stroke-width='10'
                    mask='url(#path-1-outside-1)'
                />
                <path
                    d='M543.587 26.7969C542.602 26.6328 541.536 26.5508 540.388 26.5508C536.122 26.5508 533.227 28.3672 531.704 32V59H525.2V20.9609H531.528L531.634 25.3555C533.766 21.957 536.79 20.2578 540.704 20.2578C541.97 20.2578 542.93 20.4219 543.587 20.75V26.7969Z'
                    stroke='#000000'
                    stroke-width='10'
                    mask='url(#path-1-outside-1)'
                />
            </svg>
`;

const SvgEffectTitle = ({ className, ...rest }) => {
  const ref = useRef(null);
  const isIntoView = useIsScrolledIntoView(ref, true);
  useEffect(() => {
    if (ref) {
      const node = ref.current;
      const logo = node.querySelectorAll('path');
      logo.forEach(node => {
        const totalLength = node.getTotalLength();
        node.style.strokeDasharray = totalLength;
        node.style.strokeDashoffset = totalLength + 10;
      });
    }
  }, []);

  return (
    <div
      ref={ref}
      className={[s.titleSvg, className].join(' ')}
      data-inview={isIntoView}
      dangerouslySetInnerHTML={{ __html: svgText }}
      {...rest}
    >
      {/* 
            <svg width='549' height='79' viewBox='0 0 549 79' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <mask id='path-1-outside-1' maskUnits='userSpaceOnUse' x='0.144531' y='0' width='549' height='79' fill='black'>
                    <rect fill='white' x='0.144531' width='549' height='79' />
                    <path d='M21.9805 42.8633L22.9648 49.6133L24.4062 43.5312L34.5312 7.8125H40.2266L50.1055 43.5312L51.5117 49.7188L52.6016 42.8281L60.5469 7.8125H67.332L54.9219 59H48.7695L38.2227 21.6992L37.4141 17.7969L36.6055 21.6992L25.6719 59H19.5195L7.14453 7.8125H13.8945L21.9805 42.8633Z' />
                    <path d='M95.6961 59.7031C90.5398 59.7031 86.3445 58.0156 83.1102 54.6406C79.8758 51.2422 78.2586 46.707 78.2586 41.0352V39.8398C78.2586 36.0664 78.9734 32.7031 80.4031 29.75C81.8562 26.7734 83.8719 24.4531 86.45 22.7891C89.0516 21.1016 91.8641 20.2578 94.8875 20.2578C99.8328 20.2578 103.677 21.8867 106.419 25.1445C109.161 28.4023 110.532 33.0664 110.532 39.1367V41.8438H84.7625C84.8562 45.5938 85.9461 48.6289 88.032 50.9492C90.1414 53.2461 92.8133 54.3945 96.0477 54.3945C98.3445 54.3945 100.29 53.9258 101.884 52.9883C103.477 52.0508 104.872 50.8086 106.067 49.2617L110.04 52.3555C106.852 57.2539 102.071 59.7031 95.6961 59.7031ZM94.8875 25.6016C92.2625 25.6016 90.0594 26.5625 88.2781 28.4844C86.4969 30.3828 85.3953 33.0547 84.9734 36.5H104.028V36.0078C103.841 32.7031 102.95 30.1484 101.356 28.3438C99.7625 26.5156 97.6062 25.6016 94.8875 25.6016Z' />
                    <path d='M157.494 40.4023C157.494 46.2148 156.158 50.8906 153.486 54.4297C150.814 57.9453 147.228 59.7031 142.728 59.7031C137.923 59.7031 134.209 58.0039 131.584 54.6055L131.267 59H125.291V5H131.795V25.1445C134.42 21.8867 138.041 20.2578 142.658 20.2578C147.275 20.2578 150.896 22.0039 153.521 25.4961C156.17 28.9883 157.494 33.7695 157.494 39.8398V40.4023ZM150.99 39.6641C150.99 35.2344 150.134 31.8125 148.423 29.3984C146.712 26.9844 144.252 25.7773 141.041 25.7773C136.752 25.7773 133.67 27.7695 131.795 31.7539V48.207C133.787 52.1914 136.892 54.1836 141.111 54.1836C144.228 54.1836 146.654 52.9766 148.388 50.5625C150.123 48.1484 150.99 44.5156 150.99 39.6641Z' />
                    <path d='M173.94 59V7.8125H188.389C192.842 7.8125 196.78 8.79688 200.202 10.7656C203.623 12.7344 206.26 15.5352 208.112 19.168C209.987 22.8008 210.936 26.9727 210.959 31.6836V34.9531C210.959 39.7812 210.022 44.0117 208.147 47.6445C206.295 51.2773 203.635 54.0664 200.166 56.0117C196.721 57.957 192.702 58.9531 188.108 59H173.94ZM180.69 13.3672V53.4805H187.791C192.995 53.4805 197.038 51.8633 199.92 48.6289C202.827 45.3945 204.28 40.7891 204.28 34.8125V31.8242C204.28 26.0117 202.909 21.5 200.166 18.2891C197.448 15.0547 193.58 13.4141 188.565 13.3672H180.69Z' />
                    <path d='M243.155 59.7031C237.999 59.7031 233.804 58.0156 230.57 54.6406C227.335 51.2422 225.718 46.707 225.718 41.0352V39.8398C225.718 36.0664 226.433 32.7031 227.863 29.75C229.316 26.7734 231.331 24.4531 233.909 22.7891C236.511 21.1016 239.323 20.2578 242.347 20.2578C247.292 20.2578 251.136 21.8867 253.878 25.1445C256.62 28.4023 257.991 33.0664 257.991 39.1367V41.8438H232.222C232.316 45.5938 233.405 48.6289 235.491 50.9492C237.601 53.2461 240.273 54.3945 243.507 54.3945C245.804 54.3945 247.749 53.9258 249.343 52.9883C250.937 52.0508 252.331 50.8086 253.527 49.2617L257.499 52.3555C254.312 57.2539 249.53 59.7031 243.155 59.7031ZM242.347 25.6016C239.722 25.6016 237.519 26.5625 235.738 28.4844C233.956 30.3828 232.855 33.0547 232.433 36.5H251.487V36.0078C251.3 32.7031 250.409 30.1484 248.816 28.3438C247.222 26.5156 245.066 25.6016 242.347 25.6016Z' />
                    <path d='M284.809 50.1758L294.23 20.9609H300.875L287.234 59H282.277L268.496 20.9609H275.141L284.809 50.1758Z' />
                    <path d='M329.626 59.7031C324.47 59.7031 320.274 58.0156 317.04 54.6406C313.805 51.2422 312.188 46.707 312.188 41.0352V39.8398C312.188 36.0664 312.903 32.7031 314.333 29.75C315.786 26.7734 317.802 24.4531 320.38 22.7891C322.981 21.1016 325.794 20.2578 328.817 20.2578C333.763 20.2578 337.606 21.8867 340.348 25.1445C343.091 28.4023 344.462 33.0664 344.462 39.1367V41.8438H318.692C318.786 45.5938 319.876 48.6289 321.962 50.9492C324.071 53.2461 326.743 54.3945 329.977 54.3945C332.274 54.3945 334.22 53.9258 335.813 52.9883C337.407 52.0508 338.802 50.8086 339.997 49.2617L343.97 52.3555C340.782 57.2539 336.001 59.7031 329.626 59.7031ZM328.817 25.6016C326.192 25.6016 323.989 26.5625 322.208 28.4844C320.427 30.3828 319.325 33.0547 318.903 36.5H337.958V36.0078C337.77 32.7031 336.88 30.1484 335.286 28.3438C333.692 26.5156 331.536 25.6016 328.817 25.6016Z' />
                    <path d='M366.287 59H359.783V5H366.287V59Z' />
                    <path d='M382.205 39.6289C382.205 35.9023 382.932 32.5508 384.385 29.5742C385.862 26.5977 387.901 24.3008 390.502 22.6836C393.127 21.0664 396.116 20.2578 399.467 20.2578C404.647 20.2578 408.83 22.0508 412.018 25.6367C415.229 29.2227 416.834 33.9922 416.834 39.9453V40.4023C416.834 44.1055 416.12 47.4336 414.69 50.3867C413.284 53.3164 411.256 55.6016 408.608 57.2422C405.983 58.8828 402.959 59.7031 399.538 59.7031C394.381 59.7031 390.198 57.9102 386.987 54.3242C383.799 50.7383 382.205 45.9922 382.205 40.0859V39.6289ZM388.745 40.4023C388.745 44.6211 389.717 48.0078 391.663 50.5625C393.631 53.1172 396.256 54.3945 399.538 54.3945C402.842 54.3945 405.467 53.1055 407.413 50.5273C409.358 47.9258 410.33 44.293 410.33 39.6289C410.33 35.457 409.334 32.082 407.342 29.5039C405.373 26.9023 402.748 25.6016 399.467 25.6016C396.256 25.6016 393.666 26.8789 391.698 29.4336C389.729 31.9883 388.745 35.6445 388.745 40.4023Z' />
                    <path d='M464.323 40.4023C464.323 46.1914 462.999 50.8555 460.351 54.3945C457.702 57.9336 454.116 59.7031 449.593 59.7031C444.976 59.7031 441.343 58.2383 438.695 55.3086V73.625H432.191V20.9609H438.132L438.448 25.1797C441.097 21.8984 444.777 20.2578 449.487 20.2578C454.058 20.2578 457.667 21.9805 460.316 25.4258C462.987 28.8711 464.323 33.6641 464.323 39.8047V40.4023ZM457.82 39.6641C457.82 35.375 456.905 31.9883 455.077 29.5039C453.249 27.0195 450.741 25.7773 447.554 25.7773C443.616 25.7773 440.663 27.5234 438.695 31.0156V49.1914C440.64 52.6602 443.616 54.3945 447.624 54.3945C450.741 54.3945 453.214 53.1641 455.042 50.7031C456.894 48.2188 457.82 44.5391 457.82 39.6641Z' />
                    <path d='M495.605 59.7031C490.449 59.7031 486.254 58.0156 483.02 54.6406C479.785 51.2422 478.168 46.707 478.168 41.0352V39.8398C478.168 36.0664 478.883 32.7031 480.312 29.75C481.766 26.7734 483.781 24.4531 486.359 22.7891C488.961 21.1016 491.773 20.2578 494.797 20.2578C499.742 20.2578 503.586 21.8867 506.328 25.1445C509.07 28.4023 510.441 33.0664 510.441 39.1367V41.8438H484.672C484.766 45.5938 485.855 48.6289 487.941 50.9492C490.051 53.2461 492.723 54.3945 495.957 54.3945C498.254 54.3945 500.199 53.9258 501.793 52.9883C503.387 52.0508 504.781 50.8086 505.977 49.2617L509.949 52.3555C506.762 57.2539 501.98 59.7031 495.605 59.7031ZM494.797 25.6016C492.172 25.6016 489.969 26.5625 488.188 28.4844C486.406 30.3828 485.305 33.0547 484.883 36.5H503.938V36.0078C503.75 32.7031 502.859 30.1484 501.266 28.3438C499.672 26.5156 497.516 25.6016 494.797 25.6016Z' />
                    <path d='M543.587 26.7969C542.602 26.6328 541.536 26.5508 540.388 26.5508C536.122 26.5508 533.227 28.3672 531.704 32V59H525.2V20.9609H531.528L531.634 25.3555C533.766 21.957 536.79 20.2578 540.704 20.2578C541.97 20.2578 542.93 20.4219 543.587 20.75V26.7969Z' />
                </mask>
                <path
                    d='M21.9805 42.8633L22.9648 49.6133L24.4062 43.5312L34.5312 7.8125H40.2266L50.1055 43.5312L51.5117 49.7188L52.6016 42.8281L60.5469 7.8125H67.332L54.9219 59H48.7695L38.2227 21.6992L37.4141 17.7969L36.6055 21.6992L25.6719 59H19.5195L7.14453 7.8125H13.8945L21.9805 42.8633Z'
                    stroke='#000000'
                    stroke-width='10'
                    mask='url(#path-1-outside-1)'
                />
                <path
                    d='M95.6961 59.7031C90.5398 59.7031 86.3445 58.0156 83.1102 54.6406C79.8758 51.2422 78.2586 46.707 78.2586 41.0352V39.8398C78.2586 36.0664 78.9734 32.7031 80.4031 29.75C81.8562 26.7734 83.8719 24.4531 86.45 22.7891C89.0516 21.1016 91.8641 20.2578 94.8875 20.2578C99.8328 20.2578 103.677 21.8867 106.419 25.1445C109.161 28.4023 110.532 33.0664 110.532 39.1367V41.8438H84.7625C84.8562 45.5938 85.9461 48.6289 88.032 50.9492C90.1414 53.2461 92.8133 54.3945 96.0477 54.3945C98.3445 54.3945 100.29 53.9258 101.884 52.9883C103.477 52.0508 104.872 50.8086 106.067 49.2617L110.04 52.3555C106.852 57.2539 102.071 59.7031 95.6961 59.7031ZM94.8875 25.6016C92.2625 25.6016 90.0594 26.5625 88.2781 28.4844C86.4969 30.3828 85.3953 33.0547 84.9734 36.5H104.028V36.0078C103.841 32.7031 102.95 30.1484 101.356 28.3438C99.7625 26.5156 97.6062 25.6016 94.8875 25.6016Z'
                    stroke='#000000'
                    stroke-width='10'
                    mask='url(#path-1-outside-1)'
                />
                <path
                    d='M157.494 40.4023C157.494 46.2148 156.158 50.8906 153.486 54.4297C150.814 57.9453 147.228 59.7031 142.728 59.7031C137.923 59.7031 134.209 58.0039 131.584 54.6055L131.267 59H125.291V5H131.795V25.1445C134.42 21.8867 138.041 20.2578 142.658 20.2578C147.275 20.2578 150.896 22.0039 153.521 25.4961C156.17 28.9883 157.494 33.7695 157.494 39.8398V40.4023ZM150.99 39.6641C150.99 35.2344 150.134 31.8125 148.423 29.3984C146.712 26.9844 144.252 25.7773 141.041 25.7773C136.752 25.7773 133.67 27.7695 131.795 31.7539V48.207C133.787 52.1914 136.892 54.1836 141.111 54.1836C144.228 54.1836 146.654 52.9766 148.388 50.5625C150.123 48.1484 150.99 44.5156 150.99 39.6641Z'
                    stroke='#000000'
                    stroke-width='10'
                    mask='url(#path-1-outside-1)'
                />
                <path
                    d='M173.94 59V7.8125H188.389C192.842 7.8125 196.78 8.79688 200.202 10.7656C203.623 12.7344 206.26 15.5352 208.112 19.168C209.987 22.8008 210.936 26.9727 210.959 31.6836V34.9531C210.959 39.7812 210.022 44.0117 208.147 47.6445C206.295 51.2773 203.635 54.0664 200.166 56.0117C196.721 57.957 192.702 58.9531 188.108 59H173.94ZM180.69 13.3672V53.4805H187.791C192.995 53.4805 197.038 51.8633 199.92 48.6289C202.827 45.3945 204.28 40.7891 204.28 34.8125V31.8242C204.28 26.0117 202.909 21.5 200.166 18.2891C197.448 15.0547 193.58 13.4141 188.565 13.3672H180.69Z'
                    stroke='#000000'
                    stroke-width='10'
                    mask='url(#path-1-outside-1)'
                />
                <path
                    d='M243.155 59.7031C237.999 59.7031 233.804 58.0156 230.57 54.6406C227.335 51.2422 225.718 46.707 225.718 41.0352V39.8398C225.718 36.0664 226.433 32.7031 227.863 29.75C229.316 26.7734 231.331 24.4531 233.909 22.7891C236.511 21.1016 239.323 20.2578 242.347 20.2578C247.292 20.2578 251.136 21.8867 253.878 25.1445C256.62 28.4023 257.991 33.0664 257.991 39.1367V41.8438H232.222C232.316 45.5938 233.405 48.6289 235.491 50.9492C237.601 53.2461 240.273 54.3945 243.507 54.3945C245.804 54.3945 247.749 53.9258 249.343 52.9883C250.937 52.0508 252.331 50.8086 253.527 49.2617L257.499 52.3555C254.312 57.2539 249.53 59.7031 243.155 59.7031ZM242.347 25.6016C239.722 25.6016 237.519 26.5625 235.738 28.4844C233.956 30.3828 232.855 33.0547 232.433 36.5H251.487V36.0078C251.3 32.7031 250.409 30.1484 248.816 28.3438C247.222 26.5156 245.066 25.6016 242.347 25.6016Z'
                    stroke='#000000'
                    stroke-width='10'
                    mask='url(#path-1-outside-1)'
                />
                <path d='M284.809 50.1758L294.23 20.9609H300.875L287.234 59H282.277L268.496 20.9609H275.141L284.809 50.1758Z' stroke='#000000' stroke-width='10' mask='url(#path-1-outside-1)' />
                <path
                    d='M329.626 59.7031C324.47 59.7031 320.274 58.0156 317.04 54.6406C313.805 51.2422 312.188 46.707 312.188 41.0352V39.8398C312.188 36.0664 312.903 32.7031 314.333 29.75C315.786 26.7734 317.802 24.4531 320.38 22.7891C322.981 21.1016 325.794 20.2578 328.817 20.2578C333.763 20.2578 337.606 21.8867 340.348 25.1445C343.091 28.4023 344.462 33.0664 344.462 39.1367V41.8438H318.692C318.786 45.5938 319.876 48.6289 321.962 50.9492C324.071 53.2461 326.743 54.3945 329.977 54.3945C332.274 54.3945 334.22 53.9258 335.813 52.9883C337.407 52.0508 338.802 50.8086 339.997 49.2617L343.97 52.3555C340.782 57.2539 336.001 59.7031 329.626 59.7031ZM328.817 25.6016C326.192 25.6016 323.989 26.5625 322.208 28.4844C320.427 30.3828 319.325 33.0547 318.903 36.5H337.958V36.0078C337.77 32.7031 336.88 30.1484 335.286 28.3438C333.692 26.5156 331.536 25.6016 328.817 25.6016Z'
                    stroke='#000000'
                    stroke-width='10'
                    mask='url(#path-1-outside-1)'
                />
                <path d='M366.287 59H359.783V5H366.287V59Z' stroke='#000000' stroke-width='10' mask='url(#path-1-outside-1)' />
                <path
                    d='M382.205 39.6289C382.205 35.9023 382.932 32.5508 384.385 29.5742C385.862 26.5977 387.901 24.3008 390.502 22.6836C393.127 21.0664 396.116 20.2578 399.467 20.2578C404.647 20.2578 408.83 22.0508 412.018 25.6367C415.229 29.2227 416.834 33.9922 416.834 39.9453V40.4023C416.834 44.1055 416.12 47.4336 414.69 50.3867C413.284 53.3164 411.256 55.6016 408.608 57.2422C405.983 58.8828 402.959 59.7031 399.538 59.7031C394.381 59.7031 390.198 57.9102 386.987 54.3242C383.799 50.7383 382.205 45.9922 382.205 40.0859V39.6289ZM388.745 40.4023C388.745 44.6211 389.717 48.0078 391.663 50.5625C393.631 53.1172 396.256 54.3945 399.538 54.3945C402.842 54.3945 405.467 53.1055 407.413 50.5273C409.358 47.9258 410.33 44.293 410.33 39.6289C410.33 35.457 409.334 32.082 407.342 29.5039C405.373 26.9023 402.748 25.6016 399.467 25.6016C396.256 25.6016 393.666 26.8789 391.698 29.4336C389.729 31.9883 388.745 35.6445 388.745 40.4023Z'
                    stroke='#000000'
                    stroke-width='10'
                    mask='url(#path-1-outside-1)'
                />
                <path
                    d='M464.323 40.4023C464.323 46.1914 462.999 50.8555 460.351 54.3945C457.702 57.9336 454.116 59.7031 449.593 59.7031C444.976 59.7031 441.343 58.2383 438.695 55.3086V73.625H432.191V20.9609H438.132L438.448 25.1797C441.097 21.8984 444.777 20.2578 449.487 20.2578C454.058 20.2578 457.667 21.9805 460.316 25.4258C462.987 28.8711 464.323 33.6641 464.323 39.8047V40.4023ZM457.82 39.6641C457.82 35.375 456.905 31.9883 455.077 29.5039C453.249 27.0195 450.741 25.7773 447.554 25.7773C443.616 25.7773 440.663 27.5234 438.695 31.0156V49.1914C440.64 52.6602 443.616 54.3945 447.624 54.3945C450.741 54.3945 453.214 53.1641 455.042 50.7031C456.894 48.2188 457.82 44.5391 457.82 39.6641Z'
                    stroke='#000000'
                    stroke-width='10'
                    mask='url(#path-1-outside-1)'
                />
                <path
                    d='M495.605 59.7031C490.449 59.7031 486.254 58.0156 483.02 54.6406C479.785 51.2422 478.168 46.707 478.168 41.0352V39.8398C478.168 36.0664 478.883 32.7031 480.312 29.75C481.766 26.7734 483.781 24.4531 486.359 22.7891C488.961 21.1016 491.773 20.2578 494.797 20.2578C499.742 20.2578 503.586 21.8867 506.328 25.1445C509.07 28.4023 510.441 33.0664 510.441 39.1367V41.8438H484.672C484.766 45.5938 485.855 48.6289 487.941 50.9492C490.051 53.2461 492.723 54.3945 495.957 54.3945C498.254 54.3945 500.199 53.9258 501.793 52.9883C503.387 52.0508 504.781 50.8086 505.977 49.2617L509.949 52.3555C506.762 57.2539 501.98 59.7031 495.605 59.7031ZM494.797 25.6016C492.172 25.6016 489.969 26.5625 488.188 28.4844C486.406 30.3828 485.305 33.0547 484.883 36.5H503.938V36.0078C503.75 32.7031 502.859 30.1484 501.266 28.3438C499.672 26.5156 497.516 25.6016 494.797 25.6016Z'
                    stroke='#000000'
                    stroke-width='10'
                    mask='url(#path-1-outside-1)'
                />
                <path
                    d='M543.587 26.7969C542.602 26.6328 541.536 26.5508 540.388 26.5508C536.122 26.5508 533.227 28.3672 531.704 32V59H525.2V20.9609H531.528L531.634 25.3555C533.766 21.957 536.79 20.2578 540.704 20.2578C541.97 20.2578 542.93 20.4219 543.587 20.75V26.7969Z'
                    stroke='#000000'
                    stroke-width='10'
                    mask='url(#path-1-outside-1)'
                />
            </svg> */}
    </div>
  );
};

export default SvgEffectTitle;
