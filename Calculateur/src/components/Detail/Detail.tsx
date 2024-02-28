import Item from '../Item/Item'

interface IProps {
    id: number
    name: string
    amount: number
}

function Detail({ operations }: { operations: Array<IProps> }) {
    return (
        <>
            <h2 className="text-center">Operation details</h2>
            <br />
            <table className="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>amount</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {operations?.map((operation: IProps, index: number) => {
                        return <Item key={index} operation={operation} />
                    })}
                </tbody>
            </table>
            <br />
        </>
    )
}

export default Detail
