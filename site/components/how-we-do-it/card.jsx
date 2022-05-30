import PropTypes from 'prop-types'
import ActiveIcon from './active.svg'
import InactiveIcon from './inactive.svg'

export const Card = ({ isActive, title, explanation, ...rest }) => {
  const borderColor = isActive ? `border-gray-600` : `border-gray-300`
  const wrapper = `flex flex-col items-center mx-4 mt-6 pl-4 border border-dotted ${borderColor}`

  return (
    <section className={wrapper} {...rest}>
      <h1 className="font-exo text-xl text-white">{title}</h1>
      {isActive && <p className="mt-2 text-white">{explanation}</p>}
    </section>
  )
}

Card.defaultProps = {
  isActive: false
}

Card.propTypes = {
  isActive: PropTypes.bool,
  renderIcon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  explanation: PropTypes.string
}
