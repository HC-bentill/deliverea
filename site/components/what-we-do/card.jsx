import PropTypes from 'prop-types'

export const Card = ({ renderIcon, title, explanation, ...rest }) => {
  const wrapper = 'flex flex-col items-center mx-4 mt-6'
  return (
    <section className={wrapper} {...rest}>
      <figure>{renderIcon()}</figure>
      <h1 className="font-exo text-xl text-white">{title}</h1>
      <p className="mt-2 text-white">{explanation}</p>
    </section>
  )
}

Card.defaultProps = {
  explanation: ''
}

Card.propTypes = {
  renderIcon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  explanation: PropTypes.string
}
