export default async (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).end()
    }
    const _res = await fetch(`http://127.0.0.1:3000/api/product/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        },
        body: JSON.stringify(res.body)
    })
    res.status(_res.status).json(await _res.json())
}
