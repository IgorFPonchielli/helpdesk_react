import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../Main/Header';
import MainFeaturedPost from '../Main/MainFeaturedPost';
import Footer from '../Main/Footer';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: 'Imagem Aleatória',
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget fermentum metus. Nam at ex in lacus porttitor congue. Donec cursus maximus aliquet.",
  image: 'https://source.unsplash.com/random',
  imgText: 'Sed sit amet faucibus odio.',
};


export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Helpdesk"/>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
        </main>        
      </Container>
      <Footer/>
    </React.Fragment>
  );
}