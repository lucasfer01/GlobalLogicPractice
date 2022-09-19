
import './Pagination.css';


interface Props {
    pages: number;
    currentPage: number;
}


export const Pagination = ({pages, currentPage}: Props) => {

    function handleClick(page: number) {
        window.location.href = `http://localhost:3001/?page=${page}`;
    }

  return (
    <div className='Pagination__container'>
        <div>
            {currentPage - 2 > 0 && <span onClick={() => handleClick(currentPage - 2)}>{currentPage - 2}</span>}

            {!!(currentPage - 1) && <span onClick={() => handleClick(currentPage - 1)}>{currentPage - 1}</span>}

            <span className='Pagination__span--active'>{currentPage}</span>

            {currentPage + 1 <= pages && <span onClick={() => handleClick(currentPage + 1)}>{currentPage + 1}</span>}

            {currentPage + 2 <= pages && <span onClick={() => handleClick(currentPage + 2)}>{currentPage + 2}</span>}

            {(currentPage < pages && currentPage + 1 < pages && currentPage + 2 < pages) && 
            <>
            ...<span onClick={() => handleClick(pages)}>{pages}</span>
            </>}
        </div>
    </div>
  )
}
