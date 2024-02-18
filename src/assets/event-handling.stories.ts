import type { Meta, StoryObj } from '@storybook/react';

import EventHandling from '../Quiz1/event-handling';

export default{
    title: '4. Event-handling',
    component: EventHandling,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta <typeof EventHandling>;


export const Primary: StoryObj <typeof EventHandling> = {
    args: {
        
    },
};



