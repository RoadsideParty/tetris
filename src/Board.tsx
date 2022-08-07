import { useEffect, useState } from 'react'
import './Board.scss'
import Button from './components/Button'
import Square from './components/Square'
function Board() {
  // 渲染棋盘
  const [allSquares, setAllSquares] = useState(new Array(20).fill(new Array(10).fill('')))
  function renderBoard(): JSX.Element[] {
    return allSquares.map((item, index) => {
      return (
        <div className='line' key={index}>
          {
            item.map((_item: string, _index: number) => {
              return <Square key={_index}>{_index}</Square>
            })
          }
        </div>
      )
    })
  }
  // 生成图形
  function createShape() {
    
  }
  useEffect(() => {
    console.log(1);
  }, [])
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
