import Banner from '../components/Banner'
import Collaboration from '../components/Collaboration'
import IntuitiveWay from '../components/IntuitiveWay'
import SwiperTestimonials from '../components/SwiperTestimonials'

const Home = () => {
  return (
    <div className="space-y-12 py-6">
      <Banner />
      <Collaboration />
      <IntuitiveWay />
      <SwiperTestimonials />
    </div>
  )
}

export default Home