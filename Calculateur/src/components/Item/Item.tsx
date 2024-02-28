import { FormEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteOperation, updateOperation } from '../../app/operationsSlice'

interface IProps {
    operation: {
        id: number
        name: string
        amount: number
    }
}

function Item({ operation }: IProps) {
    const [update, setUpdate] = useState(false)
    const [nameUpdate, setNameUpdate] = useState(operation.name)
    const [amountUpdate, setAmountUpdate] = useState(operation.amount)
    const dispatch = useDispatch()

    useEffect(() => {
        setNameUpdate(operation.name)
        setAmountUpdate(operation.amount)
    }, [operation.name, operation.amount])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const updatedOperation = {
            id: operation.id,
            name: nameUpdate,
            amount: amountUpdate,
        }
        dispatch(updateOperation(updatedOperation))
        setUpdate(false)
    }

    const handleDelete = (id: number) => {
        console.log(id)

        dispatch(deleteOperation(id))
    }

    const normal = (
        <>
            <td>{operation.id}</td>
            <td>{operation.name}</td>
            <td>{operation.amount}</td>
        </>
    )

    const modification = (
        <>
            <td colSpan={3} style={{ width: '300px' }}>
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input
                        type="hidden"
                        value={operation.id}
                        className="form-control"
                    />
                    <input
                        type="text"
                        value={nameUpdate}
                        className="form-control w-50"
                        onChange={(e) => {
                            setNameUpdate(e.currentTarget.value)
                        }}
                    />
                    <input
                        type="number"
                        value={amountUpdate}
                        className="form-control w-25"
                        onChange={(e) => {
                            setAmountUpdate(+e.currentTarget.value)
                        }}
                    />
                    <input
                        type="submit"
                        value={'Save'}
                        className="btn btn-warning"
                    />
                </form>
            </td>
        </>
    )
    return (
        <tr>
            {update ? modification : normal}
            <td>
                <button
                    className="btn btn-primary btn-sm"
                    onClick={() => setUpdate(!update)}
                >
                    modify
                </button>
                <button
                    className="btn btn-dark btn-sm ms-3"
                    onClick={() => {
                        handleDelete(operation.id)
                    }}
                >
                    delete
                </button>
            </td>
        </tr>
    )
}

export default Item
