
import PropTypes from 'prop-types'


function Button({children, type, version, isDisabled}) {

  return (
    <button type ={type} className={`btn btn-${version}`} disabled ={isDisabled}>
      {children}

    </button>
  )
}

Button.defaultProps ={
  type: 'button',
  version: 'primary',
  isDisabled: false

}

Button.propTypes = {
  type : PropTypes.string,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Button