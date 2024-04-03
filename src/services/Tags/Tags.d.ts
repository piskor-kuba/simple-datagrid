export type TTagsRequestParams = {
  page: string;
  pagesize: string;
  order: string;
  sort: string;
};

export type TTagsResponse = {
  items: TTag[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
};

export type TTag = {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
};

export type TTagsError = {
  error_id: number;
  error_message: string;
  error_name: string;
};
