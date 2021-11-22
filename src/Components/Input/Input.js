
const Input = ({ onInputChange, onButtonSubmit }) => {
   return (
    <div className='f4 center'>
        <p className='f4 center'>
            {'This Magic site makes your reading better'}
        </p>
        <div className='center'> 
            <div className=' form center pa4 br3 shadow-5'>
                <input className='f6 pa2 w-50 center br4' type='text' onChange= {onInputChange}/>
                <button className='w-10 grow center f6 link ph3 br4 pv2 dib white bg-dark-blue' onClick= {onButtonSubmit} >Detect</button>
            </div>
        </div>
    </div>
   );    
}
export default Input;