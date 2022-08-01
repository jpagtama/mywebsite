import styles from '../styles/SideNav.module.css';
import Menu from './Menu';

const SideNav = () => {
    return (
        <nav className={ styles.nav } ><Menu /></nav>
    )
}
export default SideNav;