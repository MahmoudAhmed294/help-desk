import { Paper } from '@mantine/core';
import { ReactNode } from 'react';

type Props = {
    children:ReactNode
}

const DetailsLayout = ({children}: Props) => {
  return (
    <Paper p="sm" radius="sm" sx={(theme)=>({borderLeft:"5px solid" , borderColor:theme.colors.main[7]})} my={16}> 
        {children}
    </Paper>
  )
}

export default DetailsLayout