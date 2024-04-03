import { Select as MuiSelect, MenuItem } from '@mui/material';

import { useFormContext } from 'react-hook-form';

type TSelectProps = {
	name: string;
	label: string;
	options: string[];
};

export const Select = ({ name, label, options }: TSelectProps) => {
	const { register } = useFormContext();

	return (
		<MuiSelect
			fullWidth
			label={label}
			defaultValue={options[0]}
			{...register(name)}>
			{options.map((option) => (
				<MenuItem key={option} value={option}>
					{option}
				</MenuItem>
			))}
		</MuiSelect>
	);
};
