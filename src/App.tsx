import { ColorSchemeProvider, type ColorScheme } from '@mantine/core';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import { Theme } from './theme/Theme';

const App = () => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <Theme>
                <RouterProvider router={router} />
            </Theme>
        </ColorSchemeProvider>
    );
};

export default App;
