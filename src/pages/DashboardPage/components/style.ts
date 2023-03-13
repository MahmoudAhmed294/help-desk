import { MantineTheme, createStyles } from "@mantine/core";

export const useStyles = createStyles((theme:MantineTheme) => ({
    buttonBg:{
        backgroundColor: theme.colors.dark[4],
        width: '100%',
        padding: 8,
        borderRadius: 8,
    }

}))
