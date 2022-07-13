import { Paginate } from './../interfaces/interfaces';

export const paginateResponse = (
  data: any,
  page: number,
  limit: number,
): Paginate => {
  if (page != 0 && limit != 0) {
    const [result, total] = data;
    const lastPage = Math.ceil(total / limit);
    const nextPage = page + 1 > lastPage ? null : page + 1;
    const prevPage = page - 1 < 1 ? null : page - 1;
    return {
      data: [...result],
      count: total,
      currentPage: page,
      nextPage: nextPage,
      prevPage: prevPage,
      lastPage: lastPage,
    };
  } else {
    const [result, total] = data;
    return {
      data: [...result],
      count: total,
      currentPage: null,
      nextPage: null,
      prevPage: null,
      lastPage: null,
    };
  }
};
