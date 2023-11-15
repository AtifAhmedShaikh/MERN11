import PropTypes from "prop-types"
const Container = ({children}) => {
return (
    <div>
        I am Parnt and thsese are 
            {children}
    </div>
  )
}
Container.propTypes={
    children:PropTypes.any
}
export default Container