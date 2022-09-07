import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Paper, Container, Card, CardContent } from '@mui/material';
import { Image } from '@mui/icons-material';

export default function ButtonAppBar() {
    return (
        <div style={{ width: '100%' }}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Material UI
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 70px - 70px)' }}>
                <Card sx={{ width: 300, height: 300, margin: '0 .5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'green' }}>
                    <CardContent>
                        <Typography sx={{fontWeight: '700', fontSize: '2rem'}} variant="h5" component="div">
                            Body Content 1
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ width: 300, height: 300, margin: '0 .5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'green' }}>
                    <CardContent>
                        <Typography sx={{fontWeight: '700', fontSize: '2rem'}} variant="h5" component="div">
                            Body Content 2
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ width: 300, height: 300, margin: '0 .5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'green' }}>
                    <CardContent>
                        <Typography sx={{fontWeight: '700', fontSize: '2rem'}} variant="h5" component="div">
                            Body Content 3
                        </Typography>
                    </CardContent>
                </Card>
            </div>

            <Paper sx={{
                // marginTop: 'calc(10% + 60px)',
                width: '100%',
                position: 'fixed',
                bottom: 0,
                right: 0,
                zIndex: -1,
                backgroundColor: '#fab4c5'
            }} component="footer" square variant="outlined">
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: "center",
                            display: "flex",
                            my: 1
                        }}
                    >
                        <div>
                            <Image priority src="/Logo.svg" width={75} height={30} alt="Logo" />
                        </div>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: "center",
                            display: "flex",
                            mb: 2,
                        }}
                    >
                        <Typography variant="caption" color="initial">
                            Copyright ©2022. [] Limited
                        </Typography>
                    </Box>
                </Container>
            </Paper>
        </div>

    );
}
