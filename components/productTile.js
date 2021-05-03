
export default function Product({ product }) {
    let lowStock = (product.stock <= 5) ? <div className="uk-card-badge uk-label-warning uk-label">Only {product.stock} Left</div> : <div></div>;
    let productImages = <li>
        <img data-src="/product.png" width="1800" height="1200"
            alt="" uk-cover="true" uk-img="target: !* -*, !* +*" />
    </li>
    return (
        <div>
            <div className="uk-card uk-card-small uk-card-hover uk-card-default">
                <div className="uk-card-media-top">
                    <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1"
                        uk-slideshow="true">

                        <ul className="uk-slideshow-items">
                            {/* 
                            for images in product.images
                            <li>
                                <img data-src="{% buildfullurl images.url %}"
                                    width="{{ images.image.width }}" height="{{ images.image.height }}"
                                    alt="" uk-cover uk-img="target: !ul > :last-child, !* +*" />
                            </li>
                            */}
                            {productImages}
                        </ul>
                        <a className="uk-position-center-left uk-position-small uk-hidden-hover"
                            href="#" uk-slidenav-previous="true" uk-slideshow-item="previous"></a>
                        <a className="uk-position-center-right uk-position-small uk-hidden-hover"
                            href="#" uk-slidenav-next="true" uk-slideshow-item="next"></a>
                    </div>
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{product.name}</h3>
                    <p>{product.description}</p>
                    {lowStock}

                </div>
                <div className="uk-card-footer">
                    <form action={`/product/${product._id}`}>
                        <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">
                            Buy Now
              </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
