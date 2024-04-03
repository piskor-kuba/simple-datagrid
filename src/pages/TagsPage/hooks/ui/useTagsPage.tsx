import { useState } from 'react';
import { useGetTags } from '../services/useGetTags';
import { GridSortItem } from '@mui/x-data-grid';

export const useTagsPage = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 1,
    pageSize: 10
  });
  const [sortModel, setSortModel] = useState<GridSortItem[]>([
    {
      field: 'popular',
      sort: 'asc'
    }
  ]);

  const { tagsData, tagsError, tagsIsLoading } = useGetTags({
    page: paginationModel.page.toString(),
    pagesize: paginationModel.pageSize.toString(),
    order: (sortModel[0]?.sort as 'asc' | 'desc') ?? 'asc',
    sort: sortModel[0]?.field ?? 'popular'
  });

  return {
    tagsData,
    tagsError,
    tagsIsLoading,
    paginationModel,
    sortModel,
    setPaginationModel,
    setSortModel
  };
};
