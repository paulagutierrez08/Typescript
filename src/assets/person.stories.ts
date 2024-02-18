import type { Meta, StoryObj } from '@storybook/react';

import Person from '../Quiz1/person';

export default{
    title: '2. Person',
    component: Person,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta <typeof Person>;


export const Primary: StoryObj <typeof Person> = {
    args: {
        name: "Paula",
        lastname:"Gutierrez",
        age: 23 ,
        hobbies: ['Play volleyball, ', ' listen to music, ', 'travel']
    },
};
