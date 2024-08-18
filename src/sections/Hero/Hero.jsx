import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Elijah-hero-img2.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/Elijah Duma CV (2).pdf';
import { useTheme} from '../../common/ThemeContext.jsx';

function Hero() {

  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile picture of Elijah Duma" width='200' height='250'/>
        <img className={styles.colorMode} src={themeIcon} alt="Colour mode icon" onClick={toggleTheme}/>
      </div>
      <div className={styles.info}>
        <h1>
            Elijah 
            <br /> 
            Duma
        </h1>
        <h2>Junior Developer</h2>
        <span>
            <a href="https://www.linkedin.com/in/elijah-duma-ab83a2216" target='_blank'>
            <img src={linkedinIcon} alt="" /></a>
            <a href="https://github.com/Tifro24" target='_blank'>
            <img src={githubIcon} alt="" /></a>
            
        </span>
        <p className={styles.description}>An individual driven by his passion of gaming and a willingness to learn and grow</p>
        <a href={CV} download>
            <button className='hover' >CV</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
