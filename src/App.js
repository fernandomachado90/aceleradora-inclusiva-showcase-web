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
import ListItemText from '@material-ui/core/ListItemText';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import FavoriteIcon from '@material-ui/icons/Favorite';

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
  <ExpansionPanel className="GroupPanel">
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={"panel-"+name+"-content"}
      id={"panel-"+name+"-header"}>
      <Typography variant="h5" className="Title"> 
        {name}
      </Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails className="GroupPanelDetails">
      {projects.map((project, index) => (
        <ProjectCard key={index} currentPath={path} {...project} />
      ))}
    </ExpansionPanelDetails>
  </ExpansionPanel>
)

const ProjectCard = ({name, currentPath, path, description, picture, pages}) => (
  <Card className="ProjectCard">
    <CardMedia image={picture} title={name} component="img" />
    <CardContent className="CardContent">
      <Typography variant="h5" className="Title" gutterBottom> 
        {name}
      </Typography>
      <Typography className="CardDescription" color="textSecondary" gutterBottom>
        {description}
      </Typography>
      <List dense={true}>          
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
    <ListItemText className="Title" primary={name} />
  </ListItemLink>
)

const Header = () => {
  return (
    <header className="Header">     
      <img src="images/inclusiva-logo.png" className="Logo"
        alt="logo da Aceleradora Inclusiva, com uma onda crescente de pessoas emergindo de um computador" />
      <Typography variant="body1" color="textSecondary"> 
        A <b>Aceleradora Inclusiva</b> é um projeto de educação inclusiva fruto de uma parceria entre 
        a <b><Link href="http://www.thoughtworks.com/pt" target="_blank">ThoughtWorks</Link></b>, 
        a <b><Link href="http://www.pucrs.br/" target="_blank">PUCRS</Link></b>, 
        e o <b><Link href="http://www.centrodeinovacao.org.br/" target="_blank">Centro de Inovação</Link></b>, 
        com o objetivo de facilitar o acesso de pessoas em 
        situação de vulnerabilidade socioeconômica à área de tecnologia através do ensino de <b>lógica de programação</b>
        e tecnologias para a construção de <b>páginas web</b>.
      </Typography>

      <Typography variant="body1" color="textSecondary"> 
        Além de um empoderamento técnico, também desenvolvemos as <b>habilidades interpessoais</b> dos alunos, 
        trazendo para o dia-a-dia da classe atividades que envolvem trabalho em equipe, autonomia, 
        resolução de problemas e assuntos do pilar de <b>justiça econômica e social</b> da <b>ThoughtWorks</b>.
      </Typography>

      <Typography variant="body1" color="textSecondary"> 
        Para construir um <b>futuro tecnológico</b> mais justo para e mudar a cara da área de tecnologia, 
        nós precisamos voltar nossos olhares para quem irá, de fato, <b>protagonizar</b> este futuro. 
      </Typography>

      <Typography variant="body1" color="textSecondary"> 
        Nossa missão é <b>"melhorar a humanidade através do software e gerar um ecossistema 
        socialmente responsável e economicamente justo"</b> e, para isso, é necessário
        promover um empoderamento tecnologico par diminuir as distâncias que existem 
        entre quem vai produzir e quem vai consumir a tecnologia.
      </Typography>

    </header>
  );
}

const Main = () => {
 return (
  <main className="Main">
    <Typography className="Title" variant="h4" gutterBottom> 
      Projetos
    </Typography>
    {json.filter(group => !group.hidden).map( (group, index) => (
      <GroupPanel key={index} {...group} />
    ))}
  </main>
 );
}

const Footer = () => {
  return (
    <footer className="Footer">
      <Typography variant="overline">
        <Link target="_blank" href="mailto:aceleradora-inclusiva@thoughtworks.com">Contato</Link> 
      </Typography>
      <Typography variant="overline">
        Feito com <FavoriteIcon className="FavoriteIcon"/> por <Link target="_blank" href="http://www.thoughtworks.com/pt">ThoughtWorks</Link> 
      </Typography>
      <Typography variant="overline">         
          <Link target="_blank" 
          href="https://github.com/fernandomachado90/aceleradora-inclusiva-showcase-web/">Contribua</Link>
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
            <Header/>
            <Main/>
            <Footer/>
          </MuiThemeProvider>
        </div>
    );
  }
}

export default App;
