import PropTypes from 'prop-types'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const core = {
  button: [
    'block grid place-items-center',
    'transition-colors text-dark hover:text-accent'
  ].join(' '),
  icon: 'h-6 w-6 m-half'
}

export const HamburgerButton = ({
                                  clickHandler,
                                  isOpen,
                                  phrases,
                                  ...rest
                                }) => {

  const { button, icon } = core
  const { open, close } = phrases
  const txt = isOpen ? close : open

  return (
    <button className={button} onClick={clickHandler} {...rest}>
      <span className='sr-only'>{txt}</span>
      {isOpen ? <XIcon className={icon} /> : <MenuIcon className={icon} />}
    </button>
  )
}

HamburgerButton.propTypes = {
  clickHandler: PropTypes.func,
  isOpen: PropTypes.bool,
  phrases: PropTypes.shape({
    open: PropTypes.string.isRequired,
    close: PropTypes.string.isRequired
  }).isRequired
}
