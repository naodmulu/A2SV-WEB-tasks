import './App.css'
import ContactUsForm from './components/ContactUsForm'

function App() {

  return (

    <div className="container">
      {/* tab for Name of form */}
      <div className="tab">
        <h1 className="title">
          Contact Us
        </h1>
      </div>


      {/* container for the form */}
      <ContactUsForm/>
    </div>

    )
}

export default App
