const LinksWithTitle = ({ array, className }) => {
    return (
        <ul className={`links__${className}`}>
            {array.map((data, index) => {
                return (
                    <li key={index}><a href={data.url} target="_blank">
                        {data.name}
                        <img className="icon" src={data.icon} alt={data.name} />
                    </a></li>
                )
            })}
        </ul>

    )
}

export default LinksWithTitle