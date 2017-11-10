import { css } from 'glamor';

let FixedSideStyles = css({
  background: '#242931',
  color: '#f5f5f5',
  fontSize: '20px',
  height: '100vh',
  lineHeight: '30px',
  '& .inner': {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    textAlign: 'right'
  },
  '& h1, p': {
    width: '100%'
  },
  '@media(min-width: 37.5em)': {
    position: 'fixed',
    width: '50%',
  }
});

export default FixedSideStyles;
