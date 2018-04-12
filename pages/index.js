
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
         color: white;
         background: #ff6600;
          color: #fff;
          font-weight: bold;
          padding: 20px;
          margin-bottom: 20px;
       }
     `}</style>
     <style global jsx>{`
       body {
         background: #eee;
         font-family: system-ui;
         margin: 0;
       }

       .new-link {
         font-size: 14px;
         margin-left: 10px;
         margin-right: 10px;
        }

        .new-link a {
          display: block;
          padding-top: 10px;
          padding-bottom: 10px;
          text-decoration: none;
          font-weight: bold;
          color: black;
          border-bottom: 1px solid #e3e3e3;
        }
        `}</style>
   </Layout>
 }
}
