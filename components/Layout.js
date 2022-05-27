import NavBar from './NavBar' // About - Projects
import Footer from './Footer' // Contact

// https://stackoverflow.com/questions/68670753/why-is-nextjs-persistent-layout-re-rendering-all-the-time
// https://nextjs.org/docs/basic-features/layouts

export default function Layout({ children }) {
  return (
  <>
    <h1>Layout</h1>
    <NavBar />
    <main>
      {children}
    </main>
    <Footer />
  </>
  )
}