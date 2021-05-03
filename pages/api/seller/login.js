export default async (req, res) => {
    console.log(req.body);
    let { email, password } = req.body;
    const jwt = req.headers.authorization;

    const _res = await fetch(`http://127.0.0.1:3000/api/seller/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': jwt,
        },
        body: JSON.stringify({
            email, password
        })
    })
    res.status(_res.status).json(await _res.json())
}
