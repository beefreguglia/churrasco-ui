import { StoryObj, Meta } from '@storybook/react';
import { Avatar, AvatarProps, BoxContent, BoxRoot } from '@absol-ui/react';

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md'],
      defaultValue: 'md',
      description: 'Tamanhos utilizados para o avatar.',
      control: { type: 'select' },
    },
    alt: {
      description: 'Texto alternativo',
    },
    src: {
      description: 'String contendo link da imagem ou arquivo de imagem',
      control: { type: null },
    },
  },
  args: {
    src: 'https://reservas.seazone.com.br/media/6298f1e1e94569b8232c852f/md',
    alt: 'Logo do SAPRON',
    size: 'md',
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <BoxRoot hasShadow>
          <BoxContent
            css={{
              backgroundColor: '$blue50',
              padding: '$4',
            }}
          >
            {Story()}
          </BoxContent>
        </BoxRoot>
      );
    },
  ],
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};

export const Small: StoryObj<AvatarProps> = {
  args: {
    size: 'sm',
  },
};
