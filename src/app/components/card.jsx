'use client'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Modal, Paper, Stack, Tooltip, Typography } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useRouter } from "next/navigation";
import { useState } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import MessageIcon from '@mui/icons-material/Message';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


const CardProducts = ({ id, title, thumbnail, price, username }) => {

    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [clicked, setClicked] = useState(false)
    const handleView = () => {
        router.push(`/ProductDetail?id=${id}&username=${username}`);
    }

    const handleLike = () => {
        if (clicked) {
            setClicked(false)
        }
        else {
            setClicked(true)
        }
    }
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Stack spacing={4}>
            <Card key={id}>
                <CardMedia component='img' image={thumbnail} />
                <CardContent>
                    <Box sx={{ height: 70 }}>
                        <Typography variant="h6" gutterBottom>{title}</Typography>
                    </Box>
                    <Typography>{price}  $</Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{ color: 'secondary.main' }} onClick={() => handleLike()}>
                        {clicked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                    <Tooltip placement="top" title="See Detail of product">
                        <Button sx={{ color: 'secondary.main' }} onClick={() => handleView()}>
                            <RemoveRedEyeIcon />
                        </Button>
                    </Tooltip>
                    <div>
                        <Tooltip placement="top" title="Share product with your friend">
                            <Button sx={{ color: 'secondary.main' }} onClick={() => handleOpen()}>
                                <ShareIcon />
                            </Button>
                        </Tooltip>
                        <Modal
                            open={open}
                            onClose={() => handleClose()}
                            aria-labelledby="child-modal-title"
                            aria-describedby="child-modal-description"
                        >
                            <Box component={Paper} elevation={10} square
                                sx={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: 400,
                                    bgcolor: 'background.paper',
                                    boxShadow: 24,
                                    pt: 2,
                                    px: 4,
                                    pb: 3,
                                }}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
                                    Please select the app
                                </Typography>
                                <Stack sx={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <Button sx={{ color: 'secondary.main' }}>
                                        <InstagramIcon />
                                    </Button>
                                    <Button sx={{ color: 'secondary.main' }}>
                                        <MessageIcon />
                                    </Button>
                                    <Button sx={{ color: 'secondary.main' }}>
                                        <TelegramIcon />
                                    </Button>
                                    <Button sx={{ color: 'secondary.main' }}>
                                        <EmailIcon />
                                    </Button>
                                </Stack>
                            </Box>
                        </Modal>
                    </div>
                </CardActions>
            </Card>
        </Stack>
    );
}
export default CardProducts;