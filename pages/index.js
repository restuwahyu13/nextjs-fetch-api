import Link from 'next/link'

function HomePage() {
	return (
		<>
			<h1>Welcome To Homepage</h1>
			<ul>
				<li>
					<Link href='/posts/users'>
						<a style={{ fontSize: 18, color: 'black', fontWeight: 600 }}>Users List Page</a>
					</Link>
				</li>
				<li>
					<Link href='/posts/user'>
						<a style={{ fontSize: 18, color: 'black', fontWeight: 600 }}>Users List Page By Id</a>
					</Link>
				</li>
			</ul>
		</>
	)
}

export default HomePage
