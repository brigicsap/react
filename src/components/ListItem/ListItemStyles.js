import { css } from 'glamor';

let ListItemStyles = css({
  boxShadow: '5px 5px 0 0 #000',
  fontSize: '20px',
  lineHeight: '30px',
  padding: '20px',
  width: '50%',

  '& span': {
    fontSize: '14px'
  },

  '& img': {
    maxWidth: '100%'
  },

  '@media(min-width: 600px)': {
    width: '33%'
  },
  '@media(min-width: 960px)': {
    width: '25%'
  }
});

export default ListItemStyles;
