import './App.css'
import articles from './assets/articles'

function App() {

  return (
    <>
      <ul>{articles.map(article => <li>{article.title}</li>)}</ul>

    </>
  )
}

export default App
