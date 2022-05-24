import Navbar from './navbar' // About - Projects
import Footer from './footer' // Contact

// https://stackoverflow.com/questions/68670753/why-is-nextjs-persistent-layout-re-rendering-all-the-time
// https://nextjs.org/docs/basic-features/layouts

export default function Layout({ children }) {
  return (
  <>
    <h1>Layout</h1>
    <Navbar />
    <main>
      {children}
    </main>
    <Footer />
  </>
  )
}