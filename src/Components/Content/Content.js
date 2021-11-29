import React from   "react";


const Content = ({ imgURL, imgBOX }) => {
    return (
        <div className='flex justify-center'>
           <div>
                <p className='flex justify-center' > A imagem enviada contém o seguinte conteudo:</p>
                    <ul>
                        { imgBOX.map( (res, i ) => { return (<li className='flex justify-center' key={i}>{res}</li>) } ) }
                    </ul>
                
                <img src={imgURL} alt='imagemDada' width='500px'/>
            </div>
        </div>
    );
}

export default Content;