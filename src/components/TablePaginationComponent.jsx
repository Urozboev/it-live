import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

const items = [1, 2, 3, 4];

function TableCore({ tableElements, TableForInfo }) {
    const navigate = useNavigate()
    return <Table hover className='pay-history-table'>
        <thead>
            <tr>
                {
                    Object.keys(TableForInfo[0]).map(key => (
                        key == 'img' ? '' : <th key={key}>{key}</th>
                    ))
                }
            </tr>
        </thead>
        <tbody>
            {TableForInfo.map(pay => (
                <tr key={pay.id}>
                    {console.log(tableElements)}
                    {Object.keys(TableForInfo[0]).map(a => {
                        switch (tableElements) {
                            case 'teacher-student':
                                return a == 'img' ? '' :
                                    <td
                                        onClick={() => navigate(`/teacher/my-students/${pay['fullName']}`)}
                                        key={a}
                                        className={a == 'summa' ? 'fw-bold' : ''}
                                    >
                                        {pay[a]}
                                    </td>
                            default:
                                return a == 'img' ? '' : <td
                                    onClick={() => navigate(`/teacher/class/${pay['sinf']}/lesson-list`)}
                                    key={a}
                                    className={a == 'summa' ? 'fw-bold' : ''}
                                >
                                    {pay[a]}
                                </td>
                        }
                    })}
                </tr>
            ))}
        </tbody>
    </Table>
}

function Items({ tableElements, currentItems, TableForInfo }) {
    return (
        <div className="row">
            {currentItems &&
                currentItems.map((items, index) => (
                    <div key={index} className="col-12">
                        <TableCore tableElements={tableElements} TableForInfo={TableForInfo} />
                    </div>
                ))
            }
        </div>
    );
}

function PaginatedItems({ tableElements, itemsPerPage, tableData }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items tableElements={tableElements} TableForInfo={tableData} currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

function TablePaginationComponent({ tableElements, tableData }) {
    console.log(tableElements)
    return (
        <div>
            <PaginatedItems className='react-pagination' tableElements={tableElements} tableData={tableData} itemsPerPage={1} />
        </div>
    )
}

export default TablePaginationComponent