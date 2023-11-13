import './Header.css';
import wtwrLogo from '../../images/day/wtwrlogo.svg'
import avatarImg from '../../images/Ellipse 18.svg'

const Header = ({ onCreateModal }) => {
	console.log('Header render');

	return (
		<header className="header">
			<div className="header__logo">
				<div className="wtwr__logo">
					<img src={wtwrLogo} alt="logo" />
				</div>
				<div className="header__date">June 15, New York</div>
			</div>
			<div className="header__avatar_section">
				<div>
					<button
						className="header__clothes_btn"
						type="text"
						onClick={onCreateModal}
					>
						+ Add clothes
					</button>
				</div>
				<div className="header__name">Terrence Tegegne</div>
				<div className="avatar__logo">
					<img src={avatarImg} alt="Avatar" />
				</div>
			</div>
		</header>
	);
};

export default Header;
