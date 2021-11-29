
const Input = ({ onInputChange, onButtonSubmit }) => {
   return (
    <div className='f4 shadow-5'>
        <p className='f3 flex justify-center'>
            {'This Magic site makes your reading better'}
        </p>
        <div className='flex justify-center pa4  '>
            <input className='br3 pa2' type='text' onChange= {onInputChange}/>
            <button className=' ph3-ns pv1-ns br3 white bg-dark-blue ml1 ' onClick= {onButtonSubmit} >Detect</button>
        </div>
    </div>
   );    
}
export default Input;