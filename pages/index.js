import Product from '../components/productTile';
import UserData from '../components/userData';
import Link from 'next/link';
import cookie from 'cookie';

export default function Home({ products, jwt }) {
  let productCards = products.map((e) => {
    return <Product product={e} key={e._id} />
  });
  let userData;
  if (jwt) {
    userData = JSON.parse(Buffer.from(jwt.split('.')[1], 'base64').toString())
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
            <UserData userData={userData}/>
          </ul>
        </div>
      </nav>

      <div className="uk-grid-large uk-child-width-1-4@s uk-flex-center uk-text-cente" uk-grid="true" uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: true">
        {productCards}
      </div>

    </div >

  )
}

export async function getServerSideProps(ctx) {
  const cookies = cookie.parse(ctx.req.headers.cookie);
  console.log(cookies.jwt);
  const _res = await fetch('http://127.0.0.1:3000/api/product/all')
  const products = await _res.json();
  return {
    props: {
      products: products,
      jwt: cookies.jwt || null,
    }
  }
}
