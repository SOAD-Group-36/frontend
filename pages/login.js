import { withCookies } from "react-cookie"
import UserData from '../components/userData'
import { useRouter } from 'next/router'


function LoginForm({ router, cookies }) {
    const loginUser = async event => {
        event.preventDefault()

        console.log('onSubmit');

        const res = await fetch('/api/login', {
            body: JSON.stringify({
                email: event.target.email.value,
                password: event.target.password.value,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': cookies.get('jwt'),
            },
            method: 'POST'
        })

        const result = await res.json()

        if (res.status != 200) {
            alert(result.error)
        } else {
            console.log(result)
            cookies.set('jwt', result.jwt, { path: '/' });
            router.push('/')
        }
    }

    const register = event => {
        router.push('/register');
    }

    return (
        <form onSubmit={loginUser} className="uk-form-horizontal uk-margin-large">
            <legend className="uk-legend">Login</legend>
            <label htmlFor="email">Email</label>
            <div className="uk-margin">
                <input className="uk-input" id="email" name="email" type="text" autoComplete="email" required />
            </div>

            <label htmlFor="password">Password</label>
            <div className="uk-margin">
                <input className="uk-input" id="password" name="password" type="text" autoComplete="password" required />
            </div>
            <p className="uk-margin">
                <button className="uk-button uk-button-primary" type="submit">Login</button>
            </p>
            <p className="uk-margin">
                <button className="uk-button uk-button-primary" type="button" onClick={register}>Register</button>
            </p>
        </form>
    )
}


function Login({ products, cookies }) {
    
    console.log(cookies)
    
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
                            <UserData ></UserData>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="uk-card uk-card-default uk-card-body uk-width-1-4@m uk-align-center">
                <LoginForm router={router} cookies={cookies} />
            </div>
        </div >
    )
}

export default withCookies(Login);
