import { useState } from 'react';

function Create({setCreateData}) {

    const [vardas, setVardas] = useState('');
    const [pavarde, setPavarde] = useState('');
    const [lesos, setLesos] = useState(0);

    const doVardas = e => {
        setVardas(e.target.value);
    }

    const doPavarde = e => {
        setPavarde(e.target.value);
    }

    const create = () => {
        setCreateData({
            vardas,
            pavarde,
            lesos
        });
        setVardas('');
        setPavarde('');
        setLesos(0)
    }

    return (
        <div className="card mt-5">
            <div className="card-header">
                <h2>Naujas klientas</h2>
            </div>
            <div className="card-body">
                <div className="m-3">
                    <label className="form-label">Vardas</label>
                    <input type="text" className="form-control" onChange={doVardas} value={vardas} />
                </div>
                <div className="m-3">
                    <label className="form-label">Pavardė</label>
                    <input type="text" className="form-control" onChange={doPavarde} value={pavarde} />
                </div>
                <button type="button" className="btn btn-outline-primary m-4" onClick={create}>Pridėti</button>
            </div>
        </div>
    )
}

export default Create;