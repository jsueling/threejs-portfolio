// mobileMenu should close if screen is resized
export default function handleResize (setMobileMenu) {
  if (window.innerWidth >= 640) setMobileMenu(false)
}