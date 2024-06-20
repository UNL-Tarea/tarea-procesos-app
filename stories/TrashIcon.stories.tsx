import type { Meta, StoryObj } from '@storybook/react';
import TrashIcon from '../app/components/Icons/TrashIcon';

const meta: Meta<typeof TrashIcon> = {
  component: TrashIcon,
  title: 'Icons/TrashIcon',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TrashIcon>;

export const Default: Story = {
  args: {},
};
