
import PropTypes from 'prop-types'

function Card( {children, reverse }) {
  // return (
  //   <div className={`card ${reverse && 'reverse'}`} >
  //   {children}
  //   </div>
  // )

  return (
    <div className="card" style={{
      color: reverse ? 'rgba(0, 0, 0, 0.4)': '#fff',
      backgroundColor: reverse? '#fff' : '#000'

    }}>
      {children}
    </div>
  )
}

Card.defaultProps = {
  reverse: true,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool

}


export default Card