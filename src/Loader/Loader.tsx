
import ContentLoader from "react-content-loader"

const Loader = () => (
  <ContentLoader 
    speed={2}
    width={255}
    height={425}
    viewBox="0 0 255 425"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="55" ry="55" width="250" height="280" /> 
    <rect x="0" y="296" rx="20" ry="20" width="250" height="24" /> 
    <rect x="25" y="328" rx="20" ry="20" width="200" height="22" /> 
    <rect x="0" y="362" rx="20" ry="20" width="250" height="24" />
  </ContentLoader>
)

export default Loader
