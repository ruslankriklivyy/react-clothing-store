import styled from "styled-components";
import { device } from "../utils/device-media";

export const FooterBlock = styled.footer`
  /* position: absolute;
  bottom: 0;
  right: 0;
  left: 0; */
  flex: 0 0 auto;
  background-color: #000;
  min-height: 122px;
  padding-top: 30px;
`;

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
`;

export const FooterBlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const FooterBlockLeft = styled.div`
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
  @media ${device.mobile} {
    width: 100%;
    ul {
      text-align: center;
      li {
        a {
          font-size: 18px;
        }
      }
    }
  }
`;

export const FooterBlockSocial = styled.div`
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
  @media ${device.mobile} {
    ul {
      padding-top: 20px;
      padding-bottom: 20px;
      justify-content: center;
      li {
        a {
          img {
            width: 15px;
            height: 15px;
          }
        }
      }
    }
  }
`;
