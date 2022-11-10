import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from 'antd';

export default {
  title: 'antd/Input',
  component: Input,
  argTypes: {
    addonAfter: {
      description: 'The label text displayed after (on the right side of) the input field',
      control: { type: 'text' },
      table: { type: { summary: 'ReactNode' } },
    },
    addonBefore: {
      description: 'The label text displayed before (on the left side of) the input field',
      control: { type: 'text' },
      table: { type: { summary: 'ReactNode' } },
    },
    allowClear: {
      description: 'If allow to remove input content with clear icon',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean | {clearIcon: ReactNode}' },
      },
    },
    bordered: {
      description: 'Whether has border style',
      control: { type: 'boolean' },
      defaultValue: true,
      table: { defaultValue: { summary: 'true' }, type: { summary: 'boolean' } },
    },
    defaultValue: {
      description: 'The initial input content',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    disabled: {
      description: 'Whether the input is disabled',
      control: { type: 'boolean' },
      defaultValue: false,
      table: { defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    id: {
      description: '	The ID for input',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    maxLength: {
      description: 'The max length',
      control: { type: 'number' },
      table: { type: { summary: 'number' } },
    },
    onChange: {
      description: 'Callback when user input',
      table: { type: { summary: 'function(e)' } },
    },
    onPressEnter: {
      description: 'The callback function that is triggered when Enter key is pressed',
      table: { type: { summary: 'function(e)' } },
    },
    placeholder: {
      description: 'Placeholder',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    prefix: {
      description: 'The prefix icon for the Input',
      control: { type: 'text' },
      table: { type: { summary: 'ReactNode' } },
    },
    showCount: {
      description: 'Whether show text count',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary:
            'boolean | { formatter: (info: { value: string, count: number, maxLength?: number }) => ReactNode }',
        },
      },
    },
    size: {
      description: 'The size of the input box',
      control: { type: 'select', options: ['large', 'middle', 'small'] },
      defaultValue: 'middle',
      table: { defaultValue: { summary: 'middle' }, type: { summary: 'string' } },
    },
    status: {
      description: 'Set validation status',
      control: { type: 'select', options: ['', 'error', 'warning'] },
      table: { type: { summary: 'string' } },
    },
    suffix: {
      description: 'The suffix icon for the Input',
      control: { type: 'text' },
      table: { type: { summary: 'ReactNode' } },
    },
    type: {
      description: 'The type of input',
      control: {
        type: 'select',
        options: [
          'button',
          'checkbox',
          'color',
          'date',
          'datetime-local',
          'email',
          'file',
          'hidden',
          'image',
          'month',
          'number',
          'password',
          'radio',
          'range',
          'reset',
          'search',
          'submit',
          'tel',
          'text',
          'time',
          'url',
          'week',
        ],
      },
      defaultValue: 'text',
      table: { defaultValue: { summary: 'text' }, type: { summary: 'string' } },
    },
    value: {
      description: 'The input content value',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
  },
} as ComponentMeta<typeof Input>;

export const InputStory: ComponentStory<typeof Input> = (args) => <Input {...args}></Input>;

InputStory.storyName = 'Input';
