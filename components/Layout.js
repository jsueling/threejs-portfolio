import NavBar from './NavBar' // About - Projects
import Footer from './Footer' // Contact

export default function Layout({ children }) {
  return (
    <div className='w-screen h-screen bg-slate-400 dark:bg-slate-900 overflow-auto selection:bg-slate-600 selection:text-white'>
      <div className='w-11/12 md:w-9/12 lg:w-7/12 m-auto p-[2%] bg-red-600 dark:bg-blue-600'>
        <h1>Layout</h1>
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}