import React, {Component} from 'react';
import {Link} from '@reach/router';

export default class Nav extends Component {
	render() {
		return (
			<div className="Nav">
				<Link className="navItem" to="/">
					<img id="logo" src={'/media/logo-2.png'} alt="logo" />
				</Link>
				<Link className="navItem" to="/articles">
					Articles
				</Link>
				<Link className="navItem" to="/users">
					Users
				</Link>
				<Link className="navItem" to="/topics">
					Topics
				</Link>
			</div>
		);
	}
}

// import React from "react";
// import Link from "next/link";
// import { Logo, PageTitle, NavStyles } from "./styles/NavStyles";

// const Nav = () => {
//   return (
//     <>
//       <NavStyles>
//         <Link href="articles">
//           <a>Articles</a>
//         </Link>
//         <Link href="users">
//           <a>Users</a>
//         </Link>
//         <Link href="topics">
//           <a>Topics</a>
//         </Link>
//         <Link href="auth">
//           <a>Sign In</a>
//         </Link>
//       </NavStyles>
//     </>
//   );
// };

// export default Nav;
