// MUI components
import {
    Alert,
    AlertTitle,
    Stack,
    Divider
} from '@mui/material';


const ErrorContainer = (props) => {
    return (
        <>
            {props.isError &&
                (
                    <>
                        <Stack sx={{ margin: '1rem auto' }}>
                            <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                {props.ErrMsg}
                            </Alert>
                        </Stack>
                        <Divider sx={{ my: 3 }} />
                    </>
                )
            }
        </>
    )
}


export default ErrorContainer