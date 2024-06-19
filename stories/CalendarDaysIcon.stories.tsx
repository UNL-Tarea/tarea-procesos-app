import type { Meta, StoryObj } from '@storybook/react';
import CalendarDaysIcon from '../app/components/Icons/CalendarDaysIcon';

const meta: Meta<typeof CalendarDaysIcon> = {
  component: CalendarDaysIcon,
  title: 'Icons/CalendarDaysIcon',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof CalendarDaysIcon>;

export const Default: Story = {
  args: {},
};
