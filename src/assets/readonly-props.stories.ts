import type { Meta, StoryObj } from '@storybook/react';

import ReadOnlyCompt from '../Quiz1/readonly-props';


export default{
    title: '8. Read Only',
    component: ReadOnlyCompt,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta <typeof ReadOnlyCompt>;


export const Primary: StoryObj <typeof ReadOnlyCompt> = {
    args: {
        name: ['Paula', 'Gutierrez']
    },
};


