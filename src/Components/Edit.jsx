import { useEffect, useState } from 'react';

function Edit({ setEditData, modalData, setModalData }) {

    const [vardas, setVardas] = useState('');

    useEffect(() => {
        if (null === modalData) {
            return;
        }
        setVardas(modalData.vardas);

    }, [modalData]);

    const doVardas = e => {
        setVardas(e.target.value);
    }



    const edit = () => {
        setEditData({
            vardas,
            id: modalData.id
        });
        setModalData(null);
    }

    if (null === modalData) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Koreguoti lėšas</h5>
                        <button type="button" className="btn-close" onClick={() => setModalData(null)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="card">
                            <div className="card-body">
                                <div className="m-3">
                                    <label className="form-label">Įrašykite sumą</label>
                                    <input type="text" className="form-control" onChange={doVardas} value={vardas} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger" onClick={() => setModalData(null)}>Nuskaiciuoti</button>
                        <button type="button" className="btn btn-outline-success" onClick={edit}>Pridėti</button>
                        <button type="button" className="btn btn-outline-primary" onClick={edit}>Išsaugoti</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit;