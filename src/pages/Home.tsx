import Banner from '../components/Banner'
import Collaboration from '../components/Collaboration'
import SwiperTestimonials from '../components/SwiperTestimonials'

const Home = () => {
  return (
    <div className="space-y-12 py-6">
      <Banner />
      <Collaboration />
      <SwiperTestimonials />
    </div>
  )
}

export default Home