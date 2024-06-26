import { axiosClient } from '../axiosClient';

export const getTags = async (params: Record<string, string>) => {
  return axiosClient
    .get(`/tags?${new URLSearchParams(params)}&site=stackoverflow`)
    .then((res) => res.data);
};

export const exampleResponse = {
  items: [
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 0,
      name: 'announcement'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'mini'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'pyzbar'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'microsoft.graph'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'langchain-together'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'retrievalqa'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'lenis'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'gcp-tracing'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'pdf.mjs'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'deno-kv'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'postbank-pdf2csv'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'openai-gymretro'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'velato'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'cloudsql'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'nvidia-vpi'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'no-unused-vars'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'dashjs'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'react-instantsearch-core'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'google-indexing'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'ruby-on-railsmailer'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'shaderfrog'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'erroneous-behavior'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'required-reason-api'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'internal-developer-platform'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'mx'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: '389ds'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'git-gutter'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'pyobjc-framework-contacts'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'cnmutablecontact'
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: 'get-pip.py'
    }
  ],
  has_more: true,
  quota_max: 10000,
  quota_remaining: 9995
};
