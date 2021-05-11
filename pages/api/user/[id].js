export default async (req, res) => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users/' + req.query.id)
	const result = await response.json()
	res.status(200).json({ statusCode: res.statusCode, method: req.method, users: result })
}
