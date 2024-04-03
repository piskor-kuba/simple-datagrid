import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

import { Select } from './Select';

const meta: Meta = {
	title: 'atoms/Select',
	component: Select,
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

type Story = StoryObj<typeof Select>;

export const Default: Story = {
	args: {
		label: 'Label',
		name: 'name',
		options: ['Option 1', 'Option 2', 'Option 3'],
	},
};
