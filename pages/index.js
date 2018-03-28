
import 'isomorphic-fetch' /* So fetch works in the server and the browser */

import Layout from '../components/Layout'

export default class extends React.Component {
  static async getInitialProps() {
   const req = await fetch(`https://api.hackerwebapp.com/news`)
   const stories = await req.json()
   return { stories }
 }

 render() {
   return <Layout title="Latest News">
     <h1>Latest News</h1>

     { this.props.stories.map((story) => (
       <h2><a href={ story.url }>{ story.title }</a></h2>
     )) }

     <style jsx>{` /* Your Page’s CSS */ `}</style>
     <style global jsx>{` /* Your Global CSS */ `}</style>
   </Layout>
 }
}
