import type { Meta, StoryObj } from '@storybook/react';

import TypeScriptBasics from '../Quiz1/typescript-basics';

export default{
    title: '1. TypeScript Basics',
    component: TypeScriptBasics,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta <typeof TypeScriptBasics>;


export const Primary: StoryObj <typeof TypeScriptBasics> = {
    args: {
        basics: ['Functions',
        'Classes',
        'Types',
        'Interfaces',
        'Modules'
    ]
    },
};

