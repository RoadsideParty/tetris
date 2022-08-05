import { useState } from 'react'
import './Board.scss'
import Button from './components/Button'
import Square from './components/Square'
function Board() {
  // 生成图形
  const [squares, setSquares] = useState<number[]>([11, 12, 21, 22])
  // 渲染棋盘
  function renderBoard(): JSX.Element[] {
    return new Array(200).fill(null).map((item, index) => {
      for (const _item of squares) {
        if (_item === index) {
          return <Square squares={squares} setSquares={setSquares} active={true} key={index} index={index} />
        }
      }
      return <Square squares={squares} setSquares={setSquares} active={false} key={index} index={index} />
    })
  }
  return (
    <>
      <div className="board">
        {renderBoard()}
      </div>
      <div className='operate-box'>
        <div className="operate-left">
          <Button type='space' />
        </div>
        <div className="operate-right">
          <Button type='up' />
          <Button type='left' />
          <Button type='right' />
          <Button type='down' />
        </div>
      </div>
    </>
  )
}

export default Board
