import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
import { CgSearch } from "react-icons/cg";

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
    background: white;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const SerachWrapper = styled.div`
    position: relative;
    float: left;
    width: 180px;
    height: 38px;
    background: #eee;
    padding: 0 20px;
    margin-top: 9px;
    border-radius: 19px;
    
    
    .iconfont {
        float: right;
        position: aboslute;
        line-height: 20px;
        line-width: 20px;
        text-align: center;
        margin-top: 4px;
        padding-top: 10px;
        border-radius: 15px;
        position: abosulte;
        right: 5px;
        width: 30px;
        bottem: 5px;
    } 
    &.focused {
        width: 240px;
        .iconfont {
            background: #777;
            color: #fff;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: 'search'
})`
    .slide-enter {
        transition: all 300ms ease-out; 
    }
    .slide-enter-active {
        width: 180px;
    }
    .slide-exit {
        transition: all 300ms ease-out; 
     }
     .slide-exit-active {
         width: 150px;
     }
    height: 38px;
    width: 150px;
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    background: #eee;
    font-size: 15px;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 180px;
    }
    &.slide-enter {
        transition: all 300ms ease-out; 
    }
    &.slide-enter-active {
         width: 240px;
    }
    &.slide-exit {
         transition: all 300ms ease-out; 
    }
    &.slide-exit-active {
          width: 180px;
    }
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    width: 70px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 20 20 px;
    line-height: 38px;
    text-align: center;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: contain;
`