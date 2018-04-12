
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
     <nav className="nav">Latest News</nav>

     { this.props.stories.map((story) => (
       <div class="new-link"><a href={ story.url }>{ story.title }</a></div>
     )) }

     <style jsx>{`
       nav {
         font-family: system-ui;
         font-weight: 300;
         color: #333;
       }
     `}</style>
     <style global jsx>{`
       body {
         background: #eee;
         font-family: system-ui;
         margin: 0;
         padding: 10px;
       }

       .new-link {
         font-size: 14px;
        }

        .new-link a {
          display: block;
          padding-top: 5px;
          padding-bottom: 5px;
          text-decoration: none;
          font-weight: bold;
          color: black;

        }
        `}</style>
   </Layout>
 }
}
