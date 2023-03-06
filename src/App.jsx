// 006crud.jsx

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.scss';
import Create from './Components/Create';
import Edit from './Components/Edit';
import List from './Components/List';
import { create, destroy, edit, read } from './Functions/localStorage';

const KEY = 'whishList';

function App() {

    const [list, setList] = useState(null);
    const [lastRefresh, setLastRefresh] = useState(Date.now());
    const [createData, setCreateData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [modalData, setModalData] = useState(null);
    const [editData, setEditData] = useState(null);


    useEffect(() => {
        setList(read(KEY));
    }, [lastRefresh]);

    useEffect(() => {
        if (null === createData) {
            return;
        }
        create(KEY, createData);
        setLastRefresh(Date.now())
    }, [createData]);

    useEffect(() => {
        if (null === deleteData) {
            return;
        }
        setList(l => l.filter(d => deleteData.id !== d.id));

       
        destroy(KEY, deleteData.id);
        setLastRefresh(Date.now());
    }, [deleteData]);

    useEffect(() => {
        if (null === editData) {
            return;
        }
        edit(KEY, editData, editData.id)
        setLastRefresh(Date.now());
    }, [editData]);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Create setCreateData={setCreateData} />
                    </div>
                    <div className="col-8">
                    <List list={list} setDeleteData={setDeleteData} setModalData={setModalData} />
                </div>
            </div>
        </div>
        <Edit modalData={modalData} setModalData={setModalData} setEditData={setEditData} />
        </>
    );
}

export default App;