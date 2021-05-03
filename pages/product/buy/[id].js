import UserData from '../../components/userData'
import Product from '../../../components/productTile'
import {useRouter} from 'next/router';

function ProductBuyForm({ router }) {
    const registerUser = async event => {
        event.preventDefault()

        console.log('onSubmit');

        const res = await fetch('/api/register', {
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
        router.push('/login');
    }

    return (
        <form onSubmit={registerUser} className="uk-form-horizontal uk-margin-large">
            <legend className="uk-legend">Register</legend>

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

export default function BuyProductPage({ product }) {
    const router = useRouter();

    if (product.error) {
        return <p>{product.error}</p>
    }

    return (
        <div>
            <nav className="uk-navbar-container uk-margin" uk-navbar="true">
                <div className="uk-navbar-left">
                    <a className="uk-navbar-item uk-logo" href="/">Local MarketPlace</a>
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
                        <UserData />
                    </ul>
                </div>
            </nav>
            <div className="uk-grid-large uk-child-width-1-4@s uk-flex-center uk-text-cente" uk-grid="true" uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: true"><Product product={product} /></div>
            <div className="uk-card-footer">
                <button className="uk-button u  k-button-primary uk-width-1-1 uk-margin-small-bottom">
                    Buy Now
            </button>
            </div>
        </div >
    )
}

export async function getServerSideProps(context) {
    const { id } = context.query;
    const _res = await fetch(`http://127.0.0.1:3000/api/product/${id}`)
    const product = await _res.json();
    return { props: { product } }
}
