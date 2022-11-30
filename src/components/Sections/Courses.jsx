import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import Box from './Box';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];


function Items({ currentItems }) {
    return (
        <div className="row box-parent">
            {currentItems &&
                currentItems.map((item, index) => (
                    <div key={index} className="col-12 col-sm-6 col-lg-4">
                        <Box num={item} />
                    </div>
                ))
            }
        </div>
    );
}

function PaginatedItems({ itemsPerPage }) {
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
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

// my function
function Courses() {
    return (
        <div className="courses">
            <PaginatedItems className='react-pagination' itemsPerPage={6} />
        </div>
    )
}

export default Courses