const TogglerTitles = ( {optionValue, id} ) => {
    return (
        <div className={`toggle-title ${id}`}>
            <select>
                {optionValue.map((title) => {
                    return <option key={title} value={title}>{title}</option>
                })}
            </select>
        </div>
    )
}

export default TogglerTitles