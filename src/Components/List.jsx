function List({ list, setDeleteData, setModalData }) {

    const destroy = w => {
        setDeleteData(w);
    }

    const edit = w => {
        setModalData(w);
    }

    if (null === list) {
        return (
            <div className="card mt-5">
                <div className="card-header">
                    <h2>LOADING...</h2>
                </div>
            </div>
        )
    }

    return (
        <div className="card mt-5">
            <div className="card-header">
                <h2>Klientų sąskaitų sąrašas</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                        list.length 
                        ?
                        list.map(w => <li key={w.id} className="list-group-item">
                            {w.vardas} {w.pavarde} {w.lesos}
                            <div className="ed-button" onClick={() => edit(w)}></div>
                            <div className="del-button" onClick={() => destroy(w)}></div>
                            </li>)
                        :
                        <li className="list-group-item">Klientų sarašas tuščias</li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default List;