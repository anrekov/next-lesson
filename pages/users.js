import Link from 'next/link'
import MainContainer from '../components/MainContainer'

const Users = ({ users }) => {
  // React like:
  // const [users, setUsers] = useState([
  //   { id: 1, name: 'First man' },
  //   { id: 2, name: 'Second' },
  // ])
  // useEffect(() => {fetch...})

  return (
    <MainContainer keywords='users'>
      <h1>List of users</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default Users

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()

  return {
    props: { users }, // will be passed to the page component props
  }
}
