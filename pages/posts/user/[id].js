import Link from 'next/link'

export async function getServerSideProps(context) {
	const response = await fetch('http://localhost:3000/api/user/' + context.params.id)
	const result = await response.json()
	return { props: { title: 'Profile Detail', user: result.users } }
}

export default function FetchByid(props) {
	return (
		<>
			<h1>{props.title}</h1>
			<ul>
				<li>
					<Link href='/posts/user'>
						<a style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}>Back To Home</a>
					</Link>
				</li>
			</ul>
			<ul>
				<li>
					<strong>Fullname: </strong> {props.user.name}
				</li>
				<li>
					<strong>Email:</strong> {props.user.email}
				</li>
				<li>
					<strong>Address:</strong>
					<ul>
						<li>
							<strong>Street:</strong> {props.user.address.street}
						</li>
						<li>
							<strong>Suite:</strong> {props.user.address.suite}
						</li>
						<li>
							<strong>City:</strong> {props.user.address.city}
						</li>
						<li>
							<strong>Zipcode:</strong> {props.user.address.zipcode}
						</li>
					</ul>
				</li>
				<li>
					<strong>Phone:</strong> {props.user.phone}
				</li>
				<li>
					<strong>Website: </strong> {props.user.website}
				</li>
			</ul>
		</>
	)
}
