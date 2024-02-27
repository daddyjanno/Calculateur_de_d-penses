import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form/Form'
import Total from './components/Total/Total'
import Synthesis from './components/Synthesis/Synthesis'
import Detail from './components/Detail/Detail'

function Calculator() {
    return (
        <>
            <Total />
            <Synthesis />
            <Detail />
            <Form />
        </>
    )
}

export default Calculator
