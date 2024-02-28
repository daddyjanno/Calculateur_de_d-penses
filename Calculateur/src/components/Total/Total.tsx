import { ReactNode } from 'react'

interface IProps {
    id: number
    name: string
    amount: number
}

function Total({ operations }: { operations: Array<IProps> }): ReactNode {
    return (
        <div className="text-center">
            <h1>Total</h1>
            <p className="fs-3">
                {operations.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue.amount
                }, 0)}{' '}
                €
            </p>
            <br />
        </div>
    )
}

export default Total
