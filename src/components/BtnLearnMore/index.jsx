import { Link } from "react-router-dom"

const BtnLearnMore = ({ className, route }) => {
    return (
        <Link to={route} className={className}>Learn More</Link>
    )
}

export default BtnLearnMore