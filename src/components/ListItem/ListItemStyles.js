import { css } from 'glamor';

let ListItemStyles = css({
  boxShadow: '5px 5px 0 0 #000',
  fontSize: '20px',
  lineHeight: '30px',
  padding: '20px',
  '@media(min-width: 600px)': {
    width: '50%'
  }
});

export default ListItemStyles;
