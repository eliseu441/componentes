import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../layout/LanguageProvider/Language.jsx';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import colunas from './repos.js';


function Tables() {
    const { language, theme } = useLanguage();

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = colunas.slice(indexOfFirstItem, indexOfLastItem);
    let items = [];
    useEffect(() => {
        const results = colunas.filter(row =>
            Object.values(row).some(val => val.toString().toLowerCase().includes(searchTerm.toLowerCase()))
        );
    }, [searchTerm, colunas]);

    const totalPages = Math.ceil(colunas.length / itemsPerPage);
    const getComparator = (sortConfig) => {
        if (!sortConfig) {
            return (a, b) => 0; // Nenhuma ordenação se sortConfig não estiver definido
        }
        return (a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        };
    };
    const sortedItems = React.useMemo(() => {
        const comparator = getComparator(sortConfig);
        const sortableItems = [...colunas].sort(comparator);
        return sortableItems.slice(indexOfFirstItem, indexOfLastItem);;
    }, [currentItems, sortConfig]);
    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
                {number}
            </Pagination.Item>,
        );
    }
    const fontColor = theme == false ? {
        color: "white",
        transition:'all 0.5s',
        background: 'linear-gradient(0deg, rgb(91, 83, 110, 0.4) 50%, rgb(42, 36, 56, 0.3) 100%)'
    } : {
        color: "white",
        transition:'all 0.5s',
        background: 'linear-gradient(0deg, rgb(44, 44, 44, 0.8) 30%, rgb(75, 75, 75, 0.7) 100%)'
    };

    //bordered pra adicionar
    return (
        <>
            <div className='page-repos'>
                <div className='row  d-flex justify-content-center'>
                    <div class='title col-sm-12 d-flex justify-content-center'>
                        <span data-aos="fade-left" style={theme == false ? { color: "white" } : { color: "rgb(55, 55, 55)" }} data-aos-duration="1000">REPOSITORIES</span>
                    </div>
                    <div className='table-repos col-12'>
                        <p className='ms-2' style={theme == false ? { fontWeight: 'bolder', color: 'white' } : { fontWeight: 'bolder', color: 'black' }} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">Search for an especific tech</p>
                        <>
                            <Form.Control
                                type="text"
                                placeholder="Search..."
                                className="mb-3"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Table striped hover className="custom-table">
                                <thead>
                                    <tr>
                                        <th style={fontColor} className='d-flex justify-content-center'>REPO</th>
                                        <th style={fontColor} onClick={() => requestSort('name')}>
                                            NAME
                                            {sortConfig.key === 'name' ? <small >{sortConfig.direction === 'ascending' ? ' ↓' : ' ↑'}</small> : null}
                                            </th>
                                        <th style={fontColor} onClick={() => requestSort('languages')}>
                                            LANGUAGES/FRAMEWORKS
                                            {sortConfig.key === 'languages' ? <small >{sortConfig.direction === 'ascending' ? ' ↓' : ' ↑'}</small> : null}
                                            </th>
                                        <th style={fontColor} onClick={() => requestSort('data')}>
                                            START_YEAR
                                            {sortConfig.key === 'data' ? <small >{sortConfig.direction === 'ascending' ? ' ↓' : ' ↑'}</small> : null}
                                            </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <Link to={`${item.link}`} target="_blank"  >
                                                    <div className='d-flex justify-content-center'>
                                                        <a class='curriculum'>
                                                            <i class="bi bi-github  information" style={theme == false ? { color: 'rgb(239, 88, 0)' } : { color: 'black' }}></i>
                                                        </a>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.languages}</td>
                                            <td>{item.data}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Pagination style={theme == false ? { opacity: 1 } : { opacity: 0.8 }}>{items}</Pagination>

                        </>

                    </div>
                    
                </div>

            </div>



        </>
    )
}

export default Tables;