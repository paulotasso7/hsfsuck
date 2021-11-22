import React from   "react";


const Content = ({ imgURL, imgBOX, onImgRead }) => {
    return (
        <div className='center'>
           <div>
                <p>Este paragrafo contém o seguinte conteudo: <ul>{imgBOX}</ul></p>
            </div>
            <div className='center'>
                <img className='center' src={imgURL} alt='imagemDada' width='500px'/>
            </div>
        </div>
    );
}

export default Content;