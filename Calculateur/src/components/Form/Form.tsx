import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewOperation } from '../../app/operationsSlice'

function Form() {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const dispatch = useDispatch()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const newOperation = {
            name: name,
            amount: amount,
        }
        dispatch(addNewOperation(newOperation))
    }
    return (
        <>
            <h2>Add a new operation</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => {
                            setName(e.currentTarget.value)
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">amount</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        className="form-control"
                        value={amount}
                        onChange={(e) => {
                            setAmount(+e.currentTarget.value)
                        }}
                    />
                </div>
                <div className="form-group d-flex justify-content-end my-3">
                    <input
                        type="submit"
                        className="btn btn-success"
                        value={'Submit'}
                    />
                </div>
            </form>
        </>
    )
}

export default Form
