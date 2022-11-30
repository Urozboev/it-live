import { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

function Box({ num }) {
    return (
        <div className="team-box text-center">
            <div className="team-box-image">
                <img src="images/testimonial-user.png" alt="" />
            </div>
            <h5 className='team-box-name'>Antony Hall</h5>
            <p className="team-box-description">Frontend {num}</p>
        </div>
    )
}

function Items({ currentItems }) {
    return (
        <div className="row team-box-parent">
            {currentItems &&
                currentItems.map((item, index) => (
                    <Col xs={12} sm={4} md={3} xxl={2} key={index}>
                        <Box num={item} />
                    </Col>
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
function TeamSlider() {
    return (
        <div className="team-sliders">
            <PaginatedItems className='react-pagination' itemsPerPage={12} />
        </div>
    )
}

export default TeamSlider