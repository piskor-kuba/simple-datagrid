import { GridColDef } from '@mui/x-data-grid';
import { TTagsResponse } from '../../services/Tags/Tags';

export const columns: GridColDef<TTagsResponse>[] = [
  { field: 'name', headerName: 'Name', minWidth: 200 },
  { field: 'count', headerName: 'Count', minWidth: 200 },
  { field: 'is_required', headerName: 'Required', minWidth: 200 },
  { field: 'is_moderator_only', headerName: 'Moderator', minWidth: 200 },
  { field: 'has_synonyms', headerName: 'Synonyms', minWidth: 200 }
];
