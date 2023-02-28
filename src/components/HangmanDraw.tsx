import draw from '../styles/draw.module.css'
const HEAD = (
    <div key={Math.random()} className={draw.head}/>
  )

const BODY = (
    <div key={Math.random()} className={draw.body}/>
  )
  
const RIGHT_ARM = (
    <div key={Math.random()}  className={draw.rightArm} />
  )
  
  const LEFT_ARM = (
    <div key={Math.random()} className={draw.leftArm}/>
  )
  
  const RIGHT_LEG = (
        <div key={Math.random()} className={draw.rightLeg} />
  )
  
  const LEFT_LEG = (
    <div key={Math.random()} className={draw.leftLeg}/>
  )
  
  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]
  
  type HangmanDrawingProps = {
    numberOfGuesses: number
  }
  
  export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
      <div className={draw.hangman} >
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className={draw.part1}/>
        <div className={draw.part2}/>
        <div className={draw.part3}/>
        <div className={draw.part4}/>
      </div>
    )
  }