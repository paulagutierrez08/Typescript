import type { Meta, StoryObj } from '@storybook/react';

import Counter from '../Quiz1/counter';


export default{
    title: '3. Counter',
    component: Counter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta <typeof Counter>;


export const Primary: StoryObj <typeof Counter> = {
    args: {
        
    },
};
