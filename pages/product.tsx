import { withRouter } from 'next/router'
import Layout from './component/Layout'

type PostProps = {
  router?: any
}

const Post: React.FunctionComponent<PostProps> = ({ router }) => {
  return (
    <Layout title="post">
      <h1>{router.query.nameProduct}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  )
}
export default withRouter(Post)