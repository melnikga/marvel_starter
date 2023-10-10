import img from './error.gif'

const Error = () => {
    return (
        <img style ={{display: 'block', width: "250px", height: "250px", objectFit: 'contain', marginLeft:'auto', marginRight:'auto'}} src={img} alt='error'/>
    )
}

export default Error;