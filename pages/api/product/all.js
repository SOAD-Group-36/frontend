export default async (req, res) => {
    const _res = await fetch(`http://127.0.0.1:3000/api/product/all`)
    res.json(await _res.json())
}
