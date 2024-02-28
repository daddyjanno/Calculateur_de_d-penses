interface IProps {
    id: number
    name: string
    amount: number
}

function Synthesis({ operations }: { operations: Array<IProps> }) {
    console.log(operations)

    return (
        <div className="text-center">
            <h2>Synthesis</h2>
            <div className="row">
                <div className="col-6">
                    <h3 className="fs-4">Income</h3>
                    <p className="fs-5">
                        {operations
                            .filter((item) => {
                                return item.amount >= 0
                            })
                            .reduce((acc, item) => {
                                return acc + item.amount
                            }, 0)}
                    </p>
                </div>
                <div className="col-6">
                    <h3 className="fs-4">Expenses</h3>
                    <p className="fs-5">
                        {operations
                            .filter((item) => {
                                return item.amount < 0
                            })
                            .reduce((acc, item) => {
                                return acc + item.amount
                            }, 0)}
                    </p>
                </div>
            </div>
            <br />
        </div>
    )
}

export default Synthesis
