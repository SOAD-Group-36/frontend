import Cookies from 'cookies'
import { withRouter } from 'next/router';

function Logout({router}) {
    function home() {
        router.push('/');
    }

    return (
        <div>
            You have been successfully Logged out.
            <button type="button" onClick={home}>Home</button>
        </div>
    );
}

Logout.getInitialProps = ({ req, res }) => {
    const cookies = new Cookies(req, res)
    cookies.set('jwt', null, {
        expires: -1,
    })
    return { props: {} };
}

export default withRouter(Logout);
