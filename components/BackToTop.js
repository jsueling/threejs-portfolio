export default function BackToTop() {

  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className='dark:text-white'>
      <button className='mb-10 navButton relative' onClick={scrollTop} >Back to Top</button>
    </div>
  )
}