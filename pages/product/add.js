import { withCookies } from "react-cookie"
import Link from 'next/link'
import { useRouter } from 'next/router'



function CreateProductForm({ router, cookies }) {
    const addProduct = async event => {
        event.preventDefault()

        console.log('onSubmit');

        const res = await fetch('/api/product/add', {
            body: JSON.stringify({
                name: event.target.name.value,
                description: event.target.description.value,
                price: event.target.price.value,
                stock: event.target.stock.value,
                sellerId: event.target.sellerId.value,
            }),
            headers: {
                'Authorization': cookies.get('jwt')
            },
            method: 'POST',
        })

        const result = await res.json()
        // result.user => 'Ada Lovelace'
    }


    return (
        <form onSubmit={addProduct} className="uk-form-horizontal uk-margin-large">
            <legend className="uk-legend">Create New Product</legend>
            <label htmlFor="name">Name</label>
            <div className="uk-margin">
                <input className="uk-input" id="name" name="name" type="text" autoComplete="name" required />
            </div>
            <label htmlFor="description">Description</label>

            <div className="uk-margin">
                <input className="uk-input" id="description" name="description" type="text" autoComplete="description" required />
            </div>
            <label htmlFor="price">Price</label>

            <div className="uk-margin">
                <input className="uk-input" id="price" name="price" type="number" autoComplete="price" required />
            </div>
            <label htmlFor="stock">Stock</label>

            <div className="uk-margin">
                <input className="uk-input" id="stock" name="stock" type="number" autoComplete="stock" required />
            </div>
            <label htmlFor="sellerId">SellerId</label>

            <div className="uk-margin">
                <input className="uk-input" id="sellerId" name="sellerId" type="text" autoComplete="sellerId" required />
            </div>
            <p className="uk-margin">
                <button className="uk-button uk-button-primary" type="submit">CreateNew</button>
            </p>
        </form>
    )
}


function CreateNewProduct({ products, cookies }) {
    const router = useRouter()
    let userData;
    if (true && false) {
        userData = (
            <li>
                <a href="#">
                    <span className="uk-icon uk-margin-small-right" uk-icon="icon: user"></span>
                    {/* User name */}
                </a>

                <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li><a href="{% url 'home:orders' %}">Orders</a></li>
                        <li><a href="#">Address</a></li>
                        <li><a href="{% url 'logout' %}" >Logout</a></li>
                    </ul>
                </div>
            </li>

        );
    } else {
        userData = (
            <li>
                <span className="uk-icon uk-margin-small-right" uk-icon="icon: user"></span>
                <Link href="/login">Login</Link>

                <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li><Link href="/register">Seller Register</Link></li>
                        <li><Link href="/login">Seller Login</Link></li>
                        <li><Link href="/register">Delivery Register</Link></li>
                        <li><Link href="/login">Delivery Login</Link></li>
                    </ul>
                </div>
            </li>
        )
    }

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
                            {userData}
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="uk-card uk-card-default uk-card-body uk-width-1-4@m uk-align-center">
                <CreateProductForm router={router} cookies={cookies} />
            </div>
        </div >
    )
}

export default withCookies(CreateNewProduct)
