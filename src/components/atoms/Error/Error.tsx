import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { TTagsError } from '../../../services/Tags/Tags';

export const Error = ({ error_id, error_message }: TTagsError) => {
	return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Alert severity='error'>
				<AlertTitle>{`Error: ${error_id}`}</AlertTitle>
				{error_message}
			</Alert>
		</Stack>
	);
};
