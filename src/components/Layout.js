import Header from "./Header"
import TabContent from "./TabContent"
import Nav from "./Nav"

export default function Layout(){
  return(
    <div className='container'>
      <Header/>
      <Nav />
      <TabContent />
    </div>
  )
}