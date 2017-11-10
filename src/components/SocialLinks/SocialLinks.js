import React, { Component } from 'react';
import { css } from 'glamor';

let SocialLinksStyles = css({

});

const SocialLinks = () => (
  <div className={SocialLinksStyles}>
    <a href="https://uk.linkedin.com/in/brigi-csap" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
    <a href="https://github.com/brigicsap" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
    <a href="http://codepen.io/brigi_cs/" target="_blank"><i class="fa fa-codepen" aria-hidden="true"></i></a>
    <a href="https://www.behance.net/brigittacs2cac" target="_blank"><i class="fa fa-behance" aria-hidden="true"></i></a>
  </div>
);

export default SocialLinks;
