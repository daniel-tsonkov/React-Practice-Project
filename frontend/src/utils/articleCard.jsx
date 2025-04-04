import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ArticleCard = ({ article }) => {
  return (
    <Card>
      <CardMedia
        style={{ height: 0, paddingTop: "56.25%" }}
        image={`https://picsum.photos/200?${article._id}`}
        title="some title"
      />
    </Card>
  );
};

export default ArticleCard;
