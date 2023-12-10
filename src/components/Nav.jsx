import Search from '../assets/images/search.svg';
import Store from '../assets/images/store.svg';
const Nav = () => {
    return (
        <nav className="nav-wrapper w-full h-[45px] bg-white">
            <div className="nav-content flex w-full h-full justify-between items-center p-5">
                <div>
                    <a className="link-styled font-bold" href="">LOGO</a>
                </div>
                <ul className="list-styled flex gap-2 justify-start items-center ">
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
