import { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@absol-ui/react';

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    children: {
      name: 'text',
      description: 'Texto utilizado como exemplo',
    },
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', '2xl'],
      defaultValue: 'md',
      description: 'Tamanhos utilizados para os textos.',
      control: { type: 'select' },
    },
    as: {
      control: { type: null },
      description: 'Valor utilizado para alterar a tag padrão `p` para outra',
    },
  },
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa excepturi possimus ut accusamus ad, sunt dolorum quasi culpa nam saepe, amet quam odio sint tenetur porro doloremque, at ex explicabo?',
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o Text sempre será um `p` mas podemos alterar isso utilizando a propriedade `as`',
      },
    },
  },
};
