import "./styleBigInfo.css"

const BigInfo = ({ info }) => {
    return (
        <div className="big-info">
            <div className="big-info__format">
                <p>{info.format}</p>
            </div>
            <div className="big-info__infos">
                <p>{info.info.presentation}</p>
                <i><a href="{info.font.url}" target="_blank">{info.font.name}</a></i>
            </div>
            <div className="big-info__record-company">{info.recordCompany}</div>
            <div className="big-info__div">
                <div className="big-info--tracks">
                    <p>🎵</p>
                    <p>{info.tracks}</p>
                </div>
                <div className="big-info--year">
                    <p>💘</p>
                    <p>{info.year}</p>
                </div>
            </div>
        </div>
    )
}

export default BigInfo