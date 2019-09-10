import React from 'react';
import {
  Link as MLink,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import Paragraph from '../../Modules/Paragraph/Paragraph';

const ProjectItem = ({ name, imageUrl, url, description }) => {
  return (
    <Card>
      <CardActionArea>
        {imageUrl ? (
          <CardMedia
            style={{ height: '15rem' }}
            image={imageUrl}
            title={name}
          />
        ) : (
          <Skeleton variant="rect" width="100%" height={118} />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <Paragraph text={description} maxLength={150} />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button component={MLink} href={url} size="small" color="primary">
          {name}
          {` Link`}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectItem;
