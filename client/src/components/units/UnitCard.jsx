import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function UnitCard({ name }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="body1">{name}</Typography>
      </CardContent>
      <CardActions>
        <Button>Test</Button>
      </CardActions>
    </Card>
  );
}

export default UnitCard;
