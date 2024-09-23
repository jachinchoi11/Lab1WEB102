import './App.css';
import LocationCards from './components/LocationCards'

import LouieImage from './images/LouieImage.jpg'
import SoupDumpling from './images/SoupDumplingSTL.jpeg'
import Corner17 from './images/Corner17Image.jpeg'
import Indo from './images/IndoImage.jpg'
import Katies from './images/KatiesImage.webp'
import Katsuya from './images/KatsuyaImage.jpg'
import KPot from './images/KPotImage.jpeg'
import Sado from './images/SadoImage.jpg'
import SaltandSmoke from './images/SaltandSmokeImage.webp'
import Turmeric from './images/TurmericImage.jpg'
const App = () => {

  return (
    <div className="App">
    <h1> Food to eat in St. Louis </h1>
    <h2>Welcome to St. Louis! Here is all the top food places to try!</h2>
    <div className = "card-container">
      <LocationCards name = {"Louie"} cuisine = {"Italian"} image = {LouieImage} link = {"https://www.louiedemun.com/"}/>
      <LocationCards name = {"Soup Dumpling STL"} cuisine = {"Chinese"} image = {SoupDumpling} link = {"https://www.facebook.com/soupdumplingSTL/"}/>
      <LocationCards name = {"Sado"} cuisine = {"Japanese"} image = {Sado} link = {"https://www.sado-stl.com/"}/>
      <LocationCards name = {"Indo"} cuisine = {"Southeast Asian"}image = {Indo} link = {"https://www.indo-stl.com/"} />
      <LocationCards name = {"Katie's"} cuisine = {"Italian"} image = {Katies} link = {"https://katiespizzaandpasta.com/"}/>
      <LocationCards name = {"Turmeric"} cuisine = {"Indian"} image = {Turmeric} link = {"https://www.turmericstl.com/qrmenu"}/>
      <LocationCards name = {"Kpot"} cuisine = {"Korean"} image = {KPot} link = {"https://thekpot.com/location/overland/"}/>
      <LocationCards name = {"Katsuya STL"} cuisine = {"Japanese"} image = {Katsuya} link = {"https://www.katsuyastl.com/menus/"}/>
      <LocationCards name = {"Salt and Smoke"} cuisine = {"American"}image = {SaltandSmoke} link = {"https://www.saltandsmokebbq.com/menu/"} />
      <LocationCards name = {"Corner 17"} cuisine = {"Chinese"}image = {Corner17} link = {"https://corner17usa.com/"} />
    </div>
    </div>
  )
}

export default App