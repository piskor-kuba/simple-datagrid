import { TextField as MuiInput } from '@mui/material';
import { useFormContext } from 'react-hook-form';

type TInputProps = {
	testId?: string;
	name: string;
	type: 'text' | 'password' | 'email' | 'number';
	variant: 'outlined' | 'filled' | 'standard';
	label: string;
};

export const Input = ({ testId, name, type, variant, label }: TInputProps) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	return (
		<MuiInput
			data-testid={testId}
			fullWidth
			label={label}
			type={type}
			variant={variant}
			error={!!errors[name]}
			helperText={errors[name]?.message as string}
			InputProps={{ inputProps: { min: 0, max: 99 } }}
			{...register(name)}
		/>
	);
};
