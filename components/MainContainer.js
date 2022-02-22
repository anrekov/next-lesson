import Head from 'next/head'
import A from '../components/A'

const MainContainer = ({ children, keywords }) => (
  <>
    <Head>
      <meta keywords={'learning, next, bee' + keywords}></meta>
      <title>Main page</title>
    </Head>

    <div className='navbar'>
      <A text='Main' href='/' />
      <A text='Users' href='/users' />
    </div>

    <div>{children}</div>

    <style jsx>{`
      .navbar {
        background: orange;
        padding: 4px 8px;
      }
    `}</style>
  </>
)

export default MainContainer
