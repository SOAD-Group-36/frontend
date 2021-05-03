import UserData from '../../components/userData'
import Link from 'next/link'

export default function ViewProduct({ product }) {
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
            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true">
                <div className="uk-card-media-left uk-cover-container">
                    <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="true">

                        <ul className="uk-slideshow-items">
                            {/* {% for images in product.images.all %}
                <li>
                                <img data-src="{% buildfullurl images.url %}" width="{{ images.image.width }}"
                                    height="{{ images.image.height }}" alt="" uk-cover uk-img="target: !ul > :last-child, !* +*">
                </li>
                                {% endfor %} */}
                            <img data-src="/product.png" width="1800" height="1200" alt="" uk-cover="true"
                                uk-img="target: !* -*, !* +*" />

                        </ul>
                        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true"
                            uk-slideshow-item="previous"></a>
                        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true"
                            uk-slideshow-item="next"></a>
                    </div>
                </div>
                <div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">{product.name}</h3>
                        <p>{product.description}</p>
                        <div className="uk-card-badge uk-label-warning uk-label">
                            {(product.stock < 5) ? `Only ${product.stock} Left` : '' }
                        </div>
                    </div>
                </div>
            </div>
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
