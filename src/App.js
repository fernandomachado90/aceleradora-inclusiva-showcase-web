import React from 'react';

import './App.css';
import json from './pages.json';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import ListItemText from '@material-ui/core/ListItemText';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Link from '@material-ui/core/Link';


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const GroupPanel = ({name, path, projects}) => (
  <ExpansionPanel>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
    <Typography variant="h5"> 
      {name}
    </Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
    {projects.map((project, index) => (
      <ProjectCard key={index} currentPath={path} {...project} />
    ))}
    </ExpansionPanelDetails>
  </ExpansionPanel>
)

const ProjectCard = ({name, currentPath, path, description, picture, pages}) => (
  <Card className="ProjectCard">
    <CardMedia image={picture} title={name} component="img" />
    <CardContent>
      <Typography variant="h5" gutterBottom> 
        {name}
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        {description}
      </Typography>
      <List component="nav" dense="true">          
        {pages.map((page, index) => (
          <ProjectLink key={index} currentPath={currentPath +'/'+ path} {...page} />
        ))}
      </List>
    </CardContent>
  </Card>
)

const ListItemLink = (props) => {
  return <ListItem button component="a" {...props} />;
};

const ProjectLink = ({name, currentPath, path}) => (
  <ListItemLink href={'pages/' + currentPath +'/'+ path + '/index.html'}>
    <ListItemText primary={name} />
  </ListItemLink>
)

const Header = () => {
  return (
  <Typography variant="body1"> 
    A Aceleradora Inclusiva é um projeto de educação inclusiva fruto de uma parceria entre a ThoughtWorks, a PUCRS e o Centro de Inovação, que tem como meta facilitar o acesso de pessoas em situação de vulnerabilidade socioeconômica à tecnologia através do ensino de lógica de programação.
  Além do empoderamento técnico, também buscamos desenvolver as habilidades interpessoais dos alunos, trazendo para o dia-a-dia da turma conceitos como trabalho em equipe, pareamento, cultura de feedback e cultivo de pessoas além de fomentar um espaço seguro para o desenvolvimento de empatia ao abordar temas do nosso pilar de justiça econômica e social (P3).
  </Typography>
) 
}

function Footer() {
  return (
    <footer>
    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      Something here to give the footer a purpose!
    </Typography>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
    </footer>
  );
}

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <CssBaseline/>
          <MuiThemeProvider theme={theme}>
            
            <p>
              <img src="images/inclusiva-logo.png" width="800px" 
                title="logo da Aceleradora Inclusiva, com uma onda crescente de pessoas emergindo de um computador" />
            </p>
            <Header/>
            <main>
            {json.map( (group, index) => (
              <GroupPanel key={index} {...group} />
            ))}
            </main>
            <Footer/>

          </MuiThemeProvider>
        </div>
    );
  }
}

export default App;
