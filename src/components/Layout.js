import Header from "./Header"
import TabPage from "./TabPage"
import Nav from "./Nav"

export default function Layout(){
  return(
    <div className='container'>
      <Header/>
      <Nav />
      <TabPage />
    </div>
  )
}