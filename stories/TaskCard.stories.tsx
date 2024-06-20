import type { Meta, StoryObj } from '@storybook/react';
import TaskCard from '../app/components/TaskCard/TaskCard';
import '../app/globals.css';

const meta: Meta<typeof TaskCard> = {
  component: TaskCard,
  title: 'Components/TaskCard',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TaskCard>;

export const Default: Story = {
  args: {},
};
