import './Header.css';

const Header = () => {
    console.log('Header render');

    return (
        <div>
        <header className="header">
            <div className="header__logo">
                <div className='wtwr__logo'>
                    <img src={require('../images/wtwrlogo.svg').default} alt='logo' />
                </div>
                <div className='header__date'>June 15, New York</div>
            </div>
            <div className="header__avatar_section">
                <div>
                    <button className='header__clothes_btn' type="text">+ Add clothes</button>
                </div>
                <div className='header__name'>Terrence Tegegne</div>
                <div className='avatar__logo'>
                    <img src={require('../images/Ellipse 18.svg').default} alt='avatar' />
                </div>
            </div>
        </header>
    </div>
    )
}

export default Header;