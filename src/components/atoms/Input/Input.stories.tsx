import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

import { Input } from './Input';

const meta: Meta = {
	title: 'atoms/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => {
			const methods = useForm();

			return (
				<FormProvider {...methods}>
					<Story />
				</FormProvider>
			);
		},
	],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		label: 'Label',
		name: 'name',
		type: 'text',
		variant: 'outlined',
	},
};
