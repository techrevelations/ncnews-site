import styled from 'styled-components';

export const Logo = styled.h1`
	// font-size: 4rem;
	// margin: 1rem 0 1rem 2rem;
	// position: relative;
	// z-index: 2;
	// transform: skew(-7deg);
	// transition: transform 0.4s;
	// &:hover {
	// 	transform: skew(-15deg);
	// }
	// a {
	// 	padding: 0.5rem 1rem;
	// 	background: ${props => props.theme.lobster};
	// 	color: white;
	// 	text-transform: uppercase;
	// 	text-decoration: none;
	// }
	// @media (max-width: 1300px) {
	// 	margin: 0;
	// 	text-align: center;
	// }
`;

export const StyledHeader = styled.header`
	.bar {
		border-bottom: 5px solid ${props => props.theme.black};
		display: grid;
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		align-items: stretch;
		@media (max-width: 1300px) {
			grid-template-columns: 1fr;
			justify-content: center;
		}
	}
`;
