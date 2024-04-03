import { useQuery } from 'react-query';
import { getTags } from '../../../../services/Tags/TagsService';
import {
  TTagsRequestParams,
  TTagsError,
  TTagsResponse
} from '../../../../services/Tags/Tags';

export const useGetTags = (params: TTagsRequestParams) => {
  const {
    data: tagsData,
    error: tagsError,
    isLoading: tagsIsLoading,
    refetch: tagsRefetch
  } = useQuery<TTagsResponse, TTagsError>({
    queryKey: ['tags', params.page, params.pagesize, params.order, params.sort],
    queryFn: () => getTags(params),
    retry: false
  });

  return { tagsData, tagsError, tagsIsLoading, tagsRefetch };
};
