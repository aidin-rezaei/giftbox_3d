import Search from '../assets/images/search.svg';
import Store from '../assets/images/store.svg';
const Nav = () => {
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                    <li>
                        <a className="link-styled" href="">LOGO</a>
                    </li>
                    <li>
                        <a className="link-styled" href="">LOGO</a>
                    </li>
                    <li>
                        <a className="link-styled" href="">LOGO</a>
                    </li>
                    <li>
                        <a className="link-styled" href="">LOGO</a>
                    </li>
                    <li>
                        <a className="link-styled" href="">LOGO</a>
                    </li>
                    <li>
                        <img src={Search} alt="Search" />
                    </li>
                    <li>
                        <img src={Store} alt="Store" />
                    </li>


                </ul>
            </div>
        </nav>
    );
}

export default Nav
