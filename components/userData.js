import Link from 'next/link';
import {useCookie} from 'react-cookie';

export default function UserData({ userData }) {
    
    if (userData) {
        console.log(userData);
        return (
            <li>
                <a href="#">
                    <span className="uk-icon uk-margin-right" uk-icon="icon: user"></span>
                    {userData.name||userData.id}
                </a>

                <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li><a href="/orders">Orders</a></li>
                        <li><a href="#">Address</a></li>
                        <li><a href="/logout" >Logout</a></li>
                    </ul>
                </div>
            </li>

        );
    } else {
        return (
            <li>
                <span className="uk-icon uk-margin-small-right" uk-icon="icon: user"></span>
                <Link href="/login">Login</Link>

                <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li><Link href="/seller/register">Seller Register</Link></li>
                        <li><Link href="/seller/login">Seller Login</Link></li>
                        <li><Link href="/register">Delivery Register</Link></li>
                        <li><Link href="/login">Delivery Login</Link></li>
                    </ul>
                </div>
            </li>
        )
    }
}
