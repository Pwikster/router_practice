import { useParams } from 'react-router-dom'

const Word = () => {
    const { word } = useParams()
    return isNaN(+word) ? <h1>The word is: {word}</h1> : null
}

export default Word
