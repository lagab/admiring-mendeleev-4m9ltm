import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Container,
  Link,
} from "@mui/material";
//import { Link as NextjsLink } from "next/link";

export const SimpleCard: React.FC = ({ children }) => {
  return (
    <>
      <Box elevation={3} sx={{}}>
        {children}
      </Box>
      <Card sx={{ maxWidth: 250 }} elevation={3}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image="https://lofi-react.envytheme.com/images/blog/blog1.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
