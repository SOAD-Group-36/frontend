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
        body: JSON.stringify({
            name: "Product 4", 
            description: "Product Description",
            price: 100,
            stock: 100,
            sellerId: "6083b2c5028bad17901883b9"
        })
    })
    res.status(_res.status).json(await _res.json())
}
