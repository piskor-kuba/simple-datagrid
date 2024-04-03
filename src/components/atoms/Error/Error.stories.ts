import type { Meta, StoryObj } from '@storybook/react';

import { Error } from './Error';

const meta: Meta = {
	title: 'atoms/Error',
	component: Error,
};

export default meta;

type Story = StoryObj<typeof Error>;

export const Default: Story = {
	args: {
		error_id: 500,
		error_message: 'Error message',
	},
};
