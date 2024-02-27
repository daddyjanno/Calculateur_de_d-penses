import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form/Form'
import Total from './components/Total/Total'
import Synthesis from './components/Synthesis/Synthesis'
import Detail from './components/Detail/Detail'
import { useSelector } from 'react-redux'
import { getOperations } from './app/operationsSlice'

function Calculator() {
    const operations = useSelector(getOperations)

    return (
        <div className="container-xl bg-light template">
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
                    <Detail operations={operations} />
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
