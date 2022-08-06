import { useState } from 'react'
import './Square.scss'
interface IProps {
    active: boolean,
    index: number
}
function Square(props: IProps) {
    const { active, index } = props
    return (
        <div className={`square ${active ? 'active' : ''}`}>{index}</div >
    )
}

export default Square