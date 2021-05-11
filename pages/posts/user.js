import Link from 'next/link'
import { useEffect, useState } from 'react'

function FetchUser(props) {
	const [states, setState] = useState({ loading: true })

	useEffect(() => {
		setState({ ...states, loading: false })
	}, [])

	return (
		<>
			{states.loading && <h1>Loading...</h1>}
			<h1>{props.title}</h1>
			<ul>
				<li>
					<Link href='/'>
						<a style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}>Back To Home</a>
					</Link>
				</li>
			</ul>
			<ul>
				{!states.loading &&
					props.users.map((val) => (
						<li key={val.id}>
							<Link href={'/posts/user/' + val.id} key={val.id}>
								<a>{val.username}</a>
							</Link>
						</li>
					))}
			</ul>
		</>
	)
}

export async function getStaticProps(context) {
	const res = await fetch('http://localhost:3000/api/users')
	const result = await res.json()
	return { props: { title: 'Fetch Data From API By Id', users: result.users } }
}

export default FetchUser
