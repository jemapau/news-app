export default class extends React.Component {
  render() {
    return <div>
      <h1>🦄 Unicorns!</h1>
      <p>and wonders</p>
      <style jsx>{`
          h1 {
            font-family: sans-serif;
            font-weight: bold;
            color: #333;
          }

          p {
            font-family: sans-serif;
          }
        `}</style>

        <style global jsx>{`
           body {
             background: #eee;
             margin: 0;
             padding: 20px;
           }
         `}</style>
    </div>
  }
}
