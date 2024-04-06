const MiniInfo = ({ miniInfo }) => {

    function activeModal() {
        const modal = document.querySelector('#big-info-external-modal')
        const btnClose = document.querySelector('#close-modal')
        const album = document.querySelector('#albums')
        modal.classList.add('show')
        album.classList.add('modal-open')

        // e.target.id == 'btn-fechar-big-info' ||

        modal.addEventListener('click', (e) => {
            if (e.target.id == 'close-modal' || e.target.id == 'big-info-external-modal') {
                modal.classList.remove('show')
                album.classList.remove('modal-open')
            }
        }
        )
    }

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
                <button onClick={activeModal}>
                    +
                </button>
            </div>
        </div>
    )
}
export default MiniInfo