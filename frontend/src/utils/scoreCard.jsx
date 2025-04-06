import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Chip,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";

const ScoreCard = ({ current }) => {
  return (
    <>
      <hr />
      <List className="scorecard">
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <StarIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Our score" secondary={current.score} className="rating" />
        </ListItem>
      </List>
    </>
  );
};

export default ScoreCard;
