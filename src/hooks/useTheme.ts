import {createTheme} from "@mui/material";

export const useTheme = (mode: boolean) => {
    return createTheme({
        palette: {
            mode: mode ? 'dark' : 'light',
        },
    })
}
