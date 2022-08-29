import { useEffect } from "react"

// implementation for animation when element enters viewport using the IntersectionObserver API, credits to: https://codepen.io/jamesdoc/pen/qBbeOym?editors=1010
const useIntersection = () => {
    useEffect(() => {

      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.children[0].classList.remove('animate-fadeOutDown')
            entry.target.children[0].classList.add('animate-fadeInUp')
          }
          else {
            entry.target.children[0].classList.remove('animate-fadeInUp')
            entry.target.children[0].classList.add('animate-fadeOutDown')
          }
        })
      }

      const observer = new IntersectionObserver(callback, { threshold: 0.3 })

      const targets = document.querySelectorAll('.animateOnScroll')
      targets.forEach((target) => observer.observe(target))
    }, [])
}

export default useIntersection