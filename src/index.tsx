import * as React from 'react'
import styles from './styles.module.css'
import Card from './components/Card'
import InputBox from './components/InputBox'

interface Props {
  text: string
}

const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export {Card,InputBox,ExampleComponent}