import Item from '../Item/Item'

function Detail({ operations }) {
    return (
        <>
            <h2 className="text-center">Operation details</h2>
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
                    {operations?.map((operation: object, index: number) => {
                        return <Item key={index} operation={operation} />
                    })}
                </tbody>
            </table>
            <hr />
        </>
    )
}

export default Detail
