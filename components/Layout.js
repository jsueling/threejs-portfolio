import NavBar from './NavBar' // About - Projects
import Footer from './Footer' // Contact

// https://stackoverflow.com/questions/68670753/why-is-nextjs-persistent-layout-re-rendering-all-the-time
// https://nextjs.org/docs/basic-features/layouts

export default function Layout({ children }) {
  return (
  <div className='sm:w-11/12 md:w-9/12 lg:w-7/12 m-auto'>
    <h1>Layout</h1>
    <NavBar />
    <main>
      {children}
    </main>
    <Footer />
  </div>
  )
}