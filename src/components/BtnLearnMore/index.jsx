import { Link } from "react-router-dom"

const BtnLearnMore = ({ className, route }) => {
    return (
        <Link to={route} className={className}><p>Learn More</p></Link>
    )
}

export default BtnLearnMore