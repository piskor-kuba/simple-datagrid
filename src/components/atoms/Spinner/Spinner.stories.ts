import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './Spinner';

const meta: Meta = {
  title: 'atoms/Spinner',
  parameters: {
    layout: 'centered'
  },
  component: Spinner
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {}
};
