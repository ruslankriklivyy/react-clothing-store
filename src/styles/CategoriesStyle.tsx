import styled from "styled-components";
import { ICategories } from "../components/Categories";
import { device } from "../utils/device-media";

export const CategoriesWrapper = styled.div`
  display: block;
  transition: all 0.4s ease;
  ul {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 12px 8px;
    border-radius: 18px;
    li {
      margin: 0 10px;
      a {
        position: relative;
        font-size: 17px;
        font-weight: 400;
        text-transform: uppercase;
        color: #fff;
        &::after {
          content: "";
          position: absolute;
          bottom: -5px;
          right: 0;
          left: 0;
          margin: 0 auto;
          background: #fff;
          width: 0;
          height: 1px;
          opacity: 0;
          transition: all 0.4s ease;
        }
        &:hover::after {
          width: 100%;
          opacity: 1;
        }
        &.active::after {
          width: 100%;
          opacity: 1;
        }
      }
    }
  }
  @media ${device.laptopL} {
    opacity: ${(props: ICategories) => (props.show ? "1" : "0")};
    visibility: ${(props: ICategories) =>
      props.show ? "visibility" : "hidden"};
    ul {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 45px;
      padding: 0;
      li {
        width: 100%;
        margin: 0;
        border-bottom: 2px solid #f3f3f3;
        a {
          display: block;
          padding: 18px 10px;
          height: 60px;
          color: #000;
          font-size: 20px;
          &::after {
            display: none;
          }
        }
      }
    }
  }
`;
