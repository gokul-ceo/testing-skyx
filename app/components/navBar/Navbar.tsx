import Image from "next/image"
import styles from '../../styles/page.module.css';
import skydigi_logo from '../../assets/skyx_logo.png';

export const NavBar=()=>{
    return <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand fs-2 " href="#">
        <Image alt="skylogo" src={skydigi_logo} height={100} width={100}/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active fs-5" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5" href="#">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5" >Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5">Careers</a>
        </li>
      </ul>
      
<button className={styles.ctabutton} role="button">Get Started</button>
    </div>
  </div>
</nav>
    </>
}