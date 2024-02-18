import type { Meta, StoryObj } from '@storybook/react';

import UbicationInfo from '../Quiz1/ubication-info';

export default{
    title: '9. TypeOf',
    component: UbicationInfo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta <typeof UbicationInfo>;


export const Primary: StoryObj <typeof UbicationInfo> = {
    args: {
        ubication: 'Hola'
    },
};
