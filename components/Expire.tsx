import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'

interface Props {
  delay: number
  children: React.ReactNode
  setSendMessageStatus: Dispatch<SetStateAction<number>>
}

const Expire: FC<Props> = ({ children, delay, setSendMessageStatus }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSendMessageStatus(null)
      setVisible(false)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay, setSendMessageStatus])

  return visible ? <div>{children}</div> : <div />
}

export default Expire
