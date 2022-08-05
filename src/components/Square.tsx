import './Square.scss'
interface IProps {
    active: boolean,
    squares: number[],
    setSquares: (squares: Array<number>) => void,
    index: number
}
type moveType = 'up' | 'down' | 'left' | 'right'
function Square(props: IProps) {
    const { squares, setSquares, active, index } = props
    // 向对应方向移动/变换
    function moveTo(dir: moveType) {
        const newSquares = squares.map(item => {
            switch (dir) {
                case 'up':
                    return item - 4
                case 'down':
                    return item + 10
                case 'left':
                    return item - 1
                case 'right':
                    return item + 1
            }
        }
        )
        setSquares(newSquares)
    }
    // 边界判断
    function isBorder(dir: moveType, curSquareIndex: number) {
        switch (dir) {
            case 'up':
                return curSquareIndex < 4
            case 'down':
                return curSquareIndex < 190
            case 'left':
                return curSquareIndex % 10 === 0
            case 'right':
                return curSquareIndex % 10 === 9
        }
    }
    // 图形每秒移动
    function start() {
        if (active) {
            const timer = setTimeout(() => {
                if (squares.every(item => isBorder('down', item))) {
                    moveTo('down')
                } else {
                    clearTimeout(timer)
                }
            }, 1000);
        }
    }
    start()
    return (
        <div className={`square ${active ? 'active' : ''}`}>{index}</div >
    )
}

export default Square