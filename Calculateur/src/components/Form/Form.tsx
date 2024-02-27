function Form() {
    return (
        <>
            <h2>Add a new operation</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">amount</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        className="form-control"
                        placeholder="0"
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
