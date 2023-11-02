
import Card from './Card';
import Header from './Header';
import Footer from './Footer';


function App() {


  return (
    <>
      <Header name='Alona Chubenko' />
      <main className='container'>

        <div className='cards'>
          <Card />
        </div>
      </main>
      <Footer copyright='Alona Chubenko' />
    </>
  )
}

export default App
