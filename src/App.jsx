import './App.css'
import articles from './assets/articles'
import { useState } from 'react'


function App() {

  const [myArticle, setArticle] = useState(articles)
  const [newArticle, setNewArticle] = useState('');

  const sendForm = event => {
    event.preventDefault();

    let pushArticle = {
      id: myArticle.length + 1,
      title: newArticle,
      description: ''

    }
    setArticle([...myArticle, pushArticle]);
    setNewArticle('');

    console.log("L'articolo è stato aggiunto");
    console.log(myArticle);
  }



  return (
    <>
      <form onSubmit={sendForm}>
        <input type="text" placeholder='Inserisci un nuovo articolo' value={newArticle} onChange={event => { setNewArticle(event.target.value) }} />
        <button>Invia</button>
      </form>

      <ul>{myArticle.map((article, i) => <li key={i}>{article.title}</li>)}</ul>


    </>
  )
}

export default App
