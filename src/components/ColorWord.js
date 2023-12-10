import { useParams } from 'react-router-dom'

const ColorWord = () => {
    const { word, textColor, bgColor } = useParams()
    const style = { color: textColor, backgroundColor: bgColor }
    return <h1 style={style}>{word}</h1>
}

export default ColorWord
