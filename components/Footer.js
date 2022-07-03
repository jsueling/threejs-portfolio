export default function Footer() {

  const scrollTop = () => {
    // https://stackabuse.com/how-to-scroll-to-top-in-react-with-a-button-component/
    console.log(window);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className='pointer-events-auto'>
      <button onClick={scrollTop}>Test</button>
      Footer
    </div>
  )
}