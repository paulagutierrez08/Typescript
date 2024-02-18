import type { Meta, StoryObj } from '@storybook/react';

import OptionalMessage from '../Quiz1/optional-message';

export default{
    title: '5. Optional Message',
    component: OptionalMessage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta <typeof OptionalMessage>;


export const Primary: StoryObj <typeof OptionalMessage> = {
    args: {
        message: "This is an optional message"
    },
};