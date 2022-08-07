import { useEffect, useState } from 'react'
import './Square.scss'
interface IProps {
    active: boolean,
    children: number
}
type moveType = 'up' | 'down' | 'left' | 'right'
function Square(props: IProps) {
    const { children, active } = props
    // 当前方块状态
    const [blackSquare, setBlackSquare] = useState(active)
    // 向对应方向移动/变换

    // 边界判断

    // 图形每秒移动

    return (
        <div className={`square ${blackSquare ? 'active' : ''}`}>{children}</div >
    )
}

export default Square