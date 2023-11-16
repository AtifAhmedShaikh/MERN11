import Lottie from 'react-lottie';
import loaderIcon from "../src/assets/Animation - 1700132934425.json"
const LoadingPage = () => {
 
  return (
    <>
      <Lottie options={{animationData:loaderIcon}}
        height={100}
        width={100}
      />
      <div>LoadingPage</div>
    </>
  )
}

export default LoadingPage