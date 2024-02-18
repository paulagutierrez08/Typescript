import type { Meta, StoryObj } from '@storybook/react';

import Tuple from '../Quiz1/tuple';

export default{
    title: '10. Tuple',
    component: Tuple,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta <typeof Tuple>;


export const Primary: StoryObj <typeof Tuple> = {
    args: {
    },
};
