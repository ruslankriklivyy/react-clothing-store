import React from 'react';
import styled from 'styled-components';

import vkSvg from '../assets/img/vk.svg';
import instagramSvg from '../assets/img/instagram.svg';

const FooterBlock = styled.footer`
  flex: 0 0 auto;
  background-color: #000;
  height: 122px;
  padding-top: 20px;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
`;

const FooterBlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterBlockLeft = styled.div`
  width: 600px;
  ul {
    text-align: left;
    li {
      margin-bottom: 6px;
      a {
        font-weight: 600;
        font-size: 24px;
        color: #fff;
        text-transform: uppercase;
      }
    }
  }
`;

const FooterBlockSocial = styled.div`
  ul {
    display: flex;
    li {
      margin-left: 15px;
      a {
        padding: 12px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        opacity: 0.8;
        transition: all 0.4s ease;
        &:hover {
          opacity: 1;
        }
        img {
          width: 23px;
          height: 23px;
        }
      }
    }
  }
`;

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
