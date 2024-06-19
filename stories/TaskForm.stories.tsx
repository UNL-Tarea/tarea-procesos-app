import type { Meta, StoryObj } from '@storybook/react';
import TaskForm from '../app/components/TaskForm/TaskForm';
import '../app/globals.css';

const meta: Meta<typeof TaskForm> = {
  component: TaskForm,
  title: 'Components/TaskForm',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TaskForm>;

export const Default: Story = {
  args: {},
};
