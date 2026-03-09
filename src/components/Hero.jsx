import { textVariant, showIn } from "../utils/motion";
import { motion } from "framer-motion";

import '../css/hero.css'
import {CTA} from '../components';

const Hero = () => {
  return (
  <section id="home" class="hero overflow-hidden">
  <div className="text-content">
    <div class="eyebrow">SODIUM • Modern Tech Hub</div>
    <motion.h1
      variants={textVariant("bottom",0.3)}
    >Building the <span>Future</span><br />Through Innovation</motion.h1>
    <motion.p
     variants={textVariant("bottom",0.3)} 
    >We manage IT, Media, and Gaming departments while empowering members through competitions, content creation, and
      tech development.</motion.p>
      {
    //<a href="login.html" class="cta-btn">Become a part of our community</a>
      }
    <CTA text="Become a part of our community" href="/login" />
    <img src="images/hero.png" class="hero-logo" alt="Floating SODIUM logo"/>
    </div>
    <img src="/images/herobg.png" alt="bg img" className="hero-bg"/>
  </section>
  )
}

export default Hero