export default function Footer() {

  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className='pointer-events-auto'>
      <h1>
        Footer
      </h1>
      <button onClick={scrollTop} className='border-2 mb-10'>Back to Top</button>
    </div>
  )
}