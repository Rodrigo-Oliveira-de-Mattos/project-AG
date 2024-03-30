const MiniInfo = ( { miniInfo } ) => {
    return (
    <div className="swipe-disc__mini-info">
        <h4 className="mini-info title">{miniInfo.name}</h4>
        <div className="mini-info div">
            <div className="mini-info year" id="year">
                <p>💘</p>
                <p>{miniInfo.year}</p>
            </div>
            <div className="mini-info tracks" id="tracks">
                <p>🎵</p>
                <p>{miniInfo.tracks}</p>
            </div>
        </div>
        <div className="mini-info learn-more" id="mini-learn-more">
            <button>
                +
            </button>
        </div>
    </div>
    )
}
export default MiniInfo