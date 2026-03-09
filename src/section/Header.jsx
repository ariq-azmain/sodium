import {Hero, Alert} from '../components'
import {BallCanvas } from '../canvas'
import useAlert from '../hooks/useAlert.js'

const Header = () => {
  const [show] = useAlert()
  // const sh = () => {
  //   show("title", "text Lorem ipsum dolor sit amet.", "#f0f", "buttonText")
  // };
  // onClick={show("title", "text Lorem ipsum dolor sit amet.", "#f0f", "buttonText")}
  return (
    <header>
      <Hero />
    </header>
  )
}

export default Header