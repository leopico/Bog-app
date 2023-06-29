import { Post } from '@prisma/client';
import _ from 'lodash';

interface PaginationStore {
    posts: Post[]
    currentPage: number
    pageSize: number
}


export const usePagination = ({posts, currentPage, pageSize} : PaginationStore) => {
    const startIndex = (currentPage - 1) * pageSize;
    return _(posts).slice(startIndex).take(pageSize).value();
}