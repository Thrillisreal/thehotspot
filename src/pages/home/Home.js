import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Footer from '../../components/footer/Footer'
import './home.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
     <Footer/>
    </>
  )
}