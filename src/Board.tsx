import { useEffect, useRef, useState } from 'react'
import './Board.scss'
import Button from './components/Button'
import Square from './components/Square'
type moveType = 'up' | 'down' | 'left' | 'right'
function Board() {
  // 所有方块的状态
  const [allSquares, setAllSquares] = useState<{ state: boolean }[]>(new Array(200).fill(null).map(() => ({ state: false })))
  // 生成单个图形
  function getRandmoSquares() {
    const allSquaresList = [
      {
        shape: [[4, 5, 14, 15]]
      },
      {
        shape: [[4, 14, 24, 34]]
      },
      {
        shape: [[4, 14, 24, 25]]
      }
    ]
    const randomIndex = Math.round(Math.random() * (allSquaresList.length - 1))
    return allSquaresList[randomIndex].shape[0]
  }
  const squaresRef = useRef(getRandmoSquares())
  // 渲染棋盘
  function renderBoard(): JSX.Element[] {
    return allSquares.map((item, index) => <Square active={item.state} index={index} key={index} />)
  }
  // 渲染黑色方块
  function renderBlackSquares(curSquares: number[]): void {
    const hasBlackSquares = [...allSquares]
    hasBlackSquares.forEach(item => item.state = false)
    for (const item of curSquares) {
      hasBlackSquares[item].state = true
    }
    setAllSquares(hasBlackSquares)
  }
  // 向对应方向移动/变换
  function moveTo(dir: moveType) {
    squaresRef.current = squaresRef.current.map(item => {
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
    })
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
    const timer = setInterval(() => {
      if (squaresRef.current.every(item => isBorder('down', item))) {
        moveTo('down')
        renderBlackSquares(squaresRef.current)
      } else {
        clearTimeout(timer)
      }
    }, 1000);
  }
  useEffect(() => {
    start()
    renderBlackSquares(squaresRef.current)
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
