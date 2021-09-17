import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import image from '../Assets/TopPicks1.jpg'
import image2 from '../Assets/TopPicks2.jpg'
import image3 from '../Assets/TopPicks3.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


 const itemData = [
    {
      img: image,
     
     author: 'author',
    },
  ];

  const itemData2 = [
    {
      img2: image2,
     
     author: 'author',
    },
  ];

  const itemData3 = [
    {
      img3: image3,
     
     author: 'author',
    },
  ];

 
 
export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <ImageList className={classes.imageList} cols={2.0}>

            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img src={item.img} alt={item.title} />
                    <ImageListItemBar
                        title={item.title}
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        actionIcon={
                            <IconButton aria-label={`star ${item.title}`}>
                                <StarBorderIcon className={classes.title} />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
            {itemData2.map((item) => (
                <ImageListItem key={item.img2}>
                    <img src={item.img2} alt={item.title} />
                    <ImageListItemBar
                        title={item.title}
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        actionIcon={
                            <IconButton aria-label={`star ${item.title}`}>
                                <StarBorderIcon className={classes.title} />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}

{itemData3.map((item) => (
                <ImageListItem key={item.img3}>
                    <img src={item.img3} alt={item.title} />
                    <ImageListItemBar
                        title={item.title}
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        actionIcon={
                            <IconButton aria-label={`star ${item.title}`}>
                                <StarBorderIcon className={classes.title} />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    </div>
);
}
