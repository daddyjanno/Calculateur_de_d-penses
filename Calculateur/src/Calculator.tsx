import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form/Form'
import Total from './components/Total/Total'
import Synthesis from './components/Synthesis/Synthesis'
import Detail from './components/Detail/Detail'

function Calculator() {
    return (
        <div className="container-fluid bg-light template">
            <header className="row">
                <div className="col-6 offset-3">
                    <Total />
                </div>
            </header>
            <section className="row">
                <div className="col-6 offset-3">
                    <Synthesis />
                </div>
            </section>
            <main className="row">
                <div className="col-6 offset-3">
                    <Detail />
                </div>
            </main>
            <footer className="row">
                <div className="col-6 offset-3">
                    <Form />
                </div>
            </footer>
        </div>
    )
}

export default Calculator
