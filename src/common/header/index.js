import React from "react";
import {
  HeaderWrapper, Logo, Nav,
  NavItem, NavSearch, Addition,
  Button, SerachWrapper
} from './style';
import { CgSearch } from "react-icons/cg";
import { RiFontSize, RiQuillPenLine } from "react-icons/ri";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

const Header = (props) => {
	return(
		<HeaderWrapper>
			<Logo/>
				<Nav>
					<NavItem className="left active">Home</NavItem>
					<NavItem className="left">Download App</NavItem>
					<CSSTransition
						in={props.focused}
						timeout={500}
						classNames="slide"
					>
						<SerachWrapper
							className={props.focused ? 'focused': ''}
						>
							<NavSearch
								className={props.focused ? 'focused': ''}
								onFocus={props.handleInputFocus}
								onBlur={props.handleInputBlur}
							></NavSearch>
							<i className="iconfont"><CgSearch /></i>
						</SerachWrapper>
					</CSSTransition>
					<NavItem className="right">
						<RiFontSize />
					</NavItem>
					<NavItem className="right">Login</NavItem>
				</Nav>
					<Addition>
						<Button>Register</Button>
						<Button>
							<RiQuillPenLine /> Post</Button>
					</Addition>
		</HeaderWrapper>
	);
}

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
     const action = {
      type: 'search_focus'
     };
     dispatch(action);
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Header);