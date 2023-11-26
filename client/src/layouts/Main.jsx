import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
import Banner from '../pages/Home/Banner'
import Container from '../components/Shared/Container'
import SearchSection from '../pages/Home/SearchSection'
import RecentBlogs from '../pages/Home/RecentBlogs'
const Main = () => {
  return (
    <div>
      <Navbar />
      <Banner></Banner>
      <Container>       <SearchSection></SearchSection>
      </Container>

      <Container><RecentBlogs></RecentBlogs></Container>
      <Footer />
    </div>
  )
}

export default Main
