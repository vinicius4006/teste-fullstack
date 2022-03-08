import './NavBar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function NavBar(){
    return(
        <header id='inicio'>
<img src='logo.png' alt='logo' />
<nav>
    <ul>
        <AnchorLink className='aLink' href='#project'>Projeto</AnchorLink>
        <AnchorLink className='aLink' href='#about'>Sobre Mim</AnchorLink>
    </ul>
</nav>
</header>
    );
}