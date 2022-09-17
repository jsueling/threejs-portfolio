export default function handleScroll(setScroll) {
  const elem = document.getElementById('content')
  const DOMRect = elem.getBoundingClientRect()
  setScroll(-1*DOMRect.top / (DOMRect.height-window.innerHeight))
}