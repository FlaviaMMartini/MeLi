import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: ['#00604E', '#36D75E'],
  secondary: ['#6FFFB0', '#36D75E', '#81FCED', '#FFCA58', '#008D72', '#00739D', '#4ED5A1', '#5CDB4C'],
  grayscale: [
    '#F8F8F8',
    '#F2F2F2',
    '#EDEDED',
    '#DADADA',
    '#444444',
    '#555555',
    '#777777',
    '#999999',
  ],
  danger: ['#FF4040'],
  alert: ['#FFAA15'],
  success: ['#00C781'],
  desatived: ['#CCCCCC'],
  white: ['#ffffff'],
}

theme.reversePalette = reversePalette(theme.palette)
theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif',
}

theme.sizes = {
  maxWidth: '1100px',
}

export default theme