export default async (req, res) => {
    const{id}= req.query;
    const _res = await fetch(`http://127.0.0.1:3000/api/product/${id}`)
    res.status(_res.status).json(await _res.json())
}
