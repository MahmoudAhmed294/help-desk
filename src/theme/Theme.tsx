import { ReactNode } from 'react';
import { MantineProvider, createEmotionCache, MantineThemeOverride } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

const cache = createEmotionCache({ key: 'mantine' });

const theme: MantineThemeOverride = {
    dir: 'rtl',
    colorScheme: 'dark',
    colors: {
        main: [
            '#FFE9BB',
            '#FFDB91',
            '#FFCE6A',
            '#FFC245',
            '#FFB539',
            '#EFA547',
            '#B39952',
            '#B39952',
            '#B39952',
            '#EFA547',
        ],
    },
    primaryColor: 'main',
};

type props = {
    children: ReactNode;
};
export function Theme({ children }: props) {
    return (
        <MantineProvider emotionCache={cache} withNormalizeCSS withGlobalStyles theme={theme}>
            <NotificationsProvider>{children}</NotificationsProvider>
        </MantineProvider>
    );
}
