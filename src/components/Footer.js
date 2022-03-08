import './Footer.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Footer(){
    return(
        <footer>
            <AnchorLink href='#inicio'><img src='logo.png' alt='logo' /></AnchorLink>
         
        <p>Projeto realizado por Vinicius S R França.</p>
 
        </footer>
    );
}