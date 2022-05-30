import PropTypes from 'prop-types'
import logo from './logo.svg'

const { src } = logo

export const Logo = ({ className, height, width, ...rest }) => {
  return (
    <img
      className={className}
      src={src}
      alt="logo"
      height={height}
      width={width}
      {...rest}
    />
  )
}

Logo.defaultProps = {
  className: 'h-5 md:h-8'
}

Logo.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}
