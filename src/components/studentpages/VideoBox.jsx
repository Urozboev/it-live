import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

export function Box({ num, id }) {
  return (
    <div className="videobox">
      <div className="videobox-texts">
        <Link to={`/student/my-lesson/${num}/${id}`} className="videobox-lesson-number">
          №{num}-dars
        </Link>
        <h2 className="videobox-lesson-name">
          Java Backend
        </h2>
      </div>

      <div className="video-container">
        <video src="videos/1.mp4"></video>
        <button
          className='video-play-btn'
        >
          <i class="fad fa-play"></i>
        </button>
      </div>
    </div>
  )
}

export function FullVideoBox({ num, id }) {
  return (
    <div className="videobox">
      <div className="videobox-texts">
        <p className="videobox-lesson-number">
          №{num}-dars
        </p>
        <h2 className="videobox-lesson-name">
          Java Backend
        </h2>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <div className="video-container">
            <video src="videos/1.mp4"></video>
            <button
              className='video-play-btn'
            >
              <i class="fad fa-play"></i>
            </button>
          </div>
        </div>

        <div className="col-12 col-md-6 ps-0 ps-md-5">
          <div className="taymkod-container">
            <h4 className="taymkod-title">
              Таймкоды:
            </h4>
            <p className='taymkod-text'>вступление<Link>0:00</Link></p>
            <p className='taymkod-text'>лобная доля<Link>0:28</Link></p>
            <p className='taymkod-text'>оптическая система<Link>3:25</Link></p>
            <p className='taymkod-text'>кровеносная система<Link>4:28</Link></p>
            <p className='taymkod-text'>иммунная система<Link>7:22</Link></p>
            <p className='taymkod-text'>нервная система<Link>9:48</Link></p>
            <p className='taymkod-text'>операционная система<Link>13:21</Link></p>
            <p className='taymkod-text'>скелет<Link>17:20</Link></p>
            <p className='taymkod-text'>ладони<Link>19:27</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Items({ currentItems }) {
  return (
    <div className="row box-parent">
      {currentItems &&
        currentItems.map((item, index) => (
          <div key={index} className="col-12 col-sm-6">
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

export const PrevLink = () => {
  return <a href="#" className='prev-link'>
    <i className="fas fa-chevron-left"></i>
    Orqaga
  </a>
}

export const ShopBox = () => {
  return (
    <div className='shop-box'>
      <h3 className="shop-box-title">
        Вы не оплатили курс
      </h3>
      <p className="shop-box-text">
        Пожалуйста оплатите за этот мессяц и вам откроется полный доступ к данному курсу
      </p>
      <div className="box-price">
        <button className="my-pink-btn">Kursni boshlash</button>
        <p className='price'><strong>$150</strong></p>
      </div>
    </div>
  )
}

function VideoBox() {
  return (
    <div className="videos-boxes">
      <ShopBox />
      <PrevLink />
      <PaginatedItems className='react-pagination' itemsPerPage={6} />
    </div>
  )
}

export default VideoBox