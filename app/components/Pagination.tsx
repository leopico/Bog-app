"use client"

import _ from 'lodash';
import clsx from 'clsx';

interface PaginationProps {
    items: number
    pageSize: number
    currentPage: number
    onPageChange: ([]: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ items, pageSize, currentPage, onPageChange }) => {

    const pageCount = items / pageSize;
    if (Math.ceil(pageCount) === 1) return null;
    const pages = _.range(1, pageCount + 1) //this showing how many pages number in paganation section

    return (
        <div className="flex space-x-1 text-gray-700 list-none cursor-pointer w-full">
            {
                pages.map(page => (
                    <li key={page} onClick={() => onPageChange(page)}
                        className={clsx(`
                        rounded sm:rounded-md px-2 py-1 sm:px-4 sm:py-2
                        transition duration-300 ease-in-out hover:bg-gray-400`,
                            page === currentPage ? "bg-gray-500 text-white/70" : "bg-gray-300"
                        )}
                    >
                        {page}
                    </li>
                ))
            }
        </div>
    )
}

export default Pagination