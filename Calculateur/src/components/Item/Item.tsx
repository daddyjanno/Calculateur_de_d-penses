import { useState } from 'react'

function Item({ operation }) {
    const [update, setUpdate] = useState(false)

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
                <form className="d-flex">
                    <input
                        type="hidden"
                        value={operation.id}
                        className="form-control"
                    />
                    <input
                        type="text"
                        value={operation.name}
                        className="form-control w-50"
                    />
                    <input
                        type="number"
                        value={operation.amount}
                        className="form-control w-25"
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
                <button className="btn btn-primary btn-sm">modify</button>
                <button className="btn btn-dark btn-sm ms-3">delete</button>
            </td>
        </tr>
    )
}

export default Item
