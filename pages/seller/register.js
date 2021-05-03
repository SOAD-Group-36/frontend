import UserData from '../../components/userData'
import { useRouter } from 'next/router'


function RegisterForm({ router }) {
    const registerUser = async event => {
        event.preventDefault()

        console.log('onSubmit');

        const res = await fetch('/api/seller/register', {
            body: JSON.stringify({
                name: event.target.name.value,
                email: event.target.email.value,
                password: event.target.password.value,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        const result = await res.json()
        // result.user => 'Ada Lovelace'
    }

    const login = event => {
        router.push('/seller/login');
    }

    return (
        <form onSubmit={registerUser} className="uk-form-horizontal uk-margin-large">
            <legend className="uk-legend">Seller Register</legend>

            <label htmlFor="name">Name</label>
            <div className="uk-margin">
                <input className="uk-input" id="name" name="name" type="text" autoComplete="name" required />
            </div>

            <label htmlFor="email">Email</label>
            <div className="uk-margin">
                <input className="uk-input" id="email" name="email" type="email" autoComplete="email" required />
            </div>

            <label htmlFor="password">Password</label>
            <div className="uk-margin">
                <input className="uk-input" id="password" name="password" type="password" autoComplete="password" required />
            </div>

            <p className="uk-margin">
                <button className="uk-button uk-button-primary" type="submit">Register</button>
            </p>
            <p className="uk-margin">
                <button className="uk-button uk-button-primary" type="button" onClick={login}>Login</button>
            </p>
        </form>
    )
}


export default function Register({ products }) {
    const router = useRouter()
    return (
        <div>
            <nav className="uk-navbar-container uk-margin" uk-navbar="true">
                <div className="uk-navbar-left">
                    <a className="uk-navbar-item uk-logo" href="{% url 'home:home' %}">Local MarketPlace</a>
                </div>
                <div className="uk-navbar-center">
                    <div className="uk-navbar-item">
                        <form className="uk-search uk-search-navbar">
                            <span uk-search-icon="true"></span>
                            <input name="query" className="uk-search-input" type="search" placeholder="Search..." />
                        </form>
                    </div>

                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li>
                            <UserData />
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="uk-card uk-card-default uk-card-body uk-width-1-4@m uk-align-center">
                <RegisterForm router={router} />
            </div>
        </div >
    )
}
