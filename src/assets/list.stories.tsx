import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import List from '../Quiz1/list';

export default{
    title: '7. Lista Generica',
    component: List,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta <typeof List>;


export const Primary: StoryObj <typeof List> = {
    args: {
        items: ['Name', 'Age', 'Adress'],
        renderItem: (item: unknown) => {
            const content = typeof item === 'string' ? item : 'Invalid type';
            return <span>{content}</span>
        }
    }
};

