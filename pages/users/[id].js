import { useRouter } from 'next/router'
import styles from '../../styles/user.module.scss'
import MainContainer from '../../components/MainContainer'

export default function ({ user }) {
  const { query } = useRouter()

  return (
    <MainContainer className={styles.user} keywords={user.name}>
      <h1>User {query.id}</h1>
      <p>Username: {user.name}</p>
    </MainContainer>
  )
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  )
  const user = await response.json()

  return {
    props: { user }, // will be passed to the page component props
  }
}
