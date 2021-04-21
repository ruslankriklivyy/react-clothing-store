import React from 'react';

import vkSvg from '../assets/img/vk.svg';
import instagramSvg from '../assets/img/instagram.svg';

import {
  Container,
  FooterBlock,
  FooterBlockLeft,
  FooterBlockSocial,
  FooterBlockWrapper,
} from '../styles/FooterStyle';

const linksFooter = ['Служба поддержи', 'Подписаться на рассылку'];

const Footer = () => {
  return (
    <FooterBlock>
      <Container>
        <FooterBlockWrapper>
          <FooterBlockLeft>
            <ul>
              {linksFooter.map((name, index) => (
                <li key={`${name}-${index}`}>
                  <a href="/">{name}</a>
                </li>
              ))}
            </ul>
          </FooterBlockLeft>
          <FooterBlockSocial>
            <ul>
              <li>
                <a href="/">
                  <img src={vkSvg} alt="vk svg" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={instagramSvg} alt="instagram svg" />
                </a>
              </li>
            </ul>
          </FooterBlockSocial>
        </FooterBlockWrapper>
      </Container>
    </FooterBlock>
  );
};

export default Footer;
