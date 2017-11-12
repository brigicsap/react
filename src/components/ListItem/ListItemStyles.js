import { css } from 'glamor';

let ListItemStyles = css({
  boxShadow: '5px 5px 0 0 #000',
  fontSize: '20px',
  lineHeight: '30px',
  padding: '20px',
  width: '25%',

  '& span': {
    fontSize: '14px'
  }
});

export default ListItemStyles;
