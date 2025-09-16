import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className='dark:text-white'>
      <a href='https://github.com/jsueling/threejs-portfolio' rel='noreferrer' target='_blank' className='pointer-events-auto h-6 w-6'>
        <FontAwesomeIcon className='h-6 w-6' icon={faGithub} />
      </a>
      <a href='mailto:j.sueling0@gmail.com' rel='noreferrer' target='_blank' className='pointer-events-auto h-6 w-6 ml-4'>
        <FontAwesomeIcon className='h-6 w-6' icon={faEnvelope} />
      </a>
    </div>
  )
}