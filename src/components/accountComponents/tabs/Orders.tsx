import styles from '../../../styles/components/account/tabs/orders.module.scss'
import classes from '../../../styles/components/account/tabs/table.module.scss'
import { BiChevronDown } from 'react-icons/bi'
import React, { useState } from 'react'
import OrderItem from './OrderItem'
import { AiOutlineMail } from 'react-icons/ai'

const orders=[
  {
    number:'200306-112444',
    date:'06 марта 2020',
    status:'in work',
    paymentStatus:'ready',
    summary:291970,
    message:1,
  },
  {
    number:'200306-114514',
    date:'06 марта 2020',
    status:'in process',
    paymentStatus:'ready',
    summary:34970,
    message:false,
  },
  {
    number:'200306-112414',
    date:'06 марта 2020',
    status:'ready',
    paymentStatus:'ready',
    summary:234970,
    message:2,
  }
]

export default function Orders(){

  const [stateComponent, setStateComponent] = useState([false, false, false]);
  const handleState = (state, index) => {
    let stateCopy =  state.slice()
    stateCopy[index] = !stateCopy[index]
    return stateCopy
  }

  return(
    <div className={classes.table}>
      {
        orders.map((item,index)=>(
          <div className={classes.item}>
            <div className={classes.title}>
              <div className={classes.half}>
                <p>{item.number}</p>
                <p>{item.date}</p>
                  {
                    item.message?
                    <div className={classes.activeMail}>
                      <span><AiOutlineMail size={20}/></span>
                      <span className={classes.circle}><p>{item.message}</p></span>
                    </div>:
                    <div className={classes.mail}>
                      <span><AiOutlineMail size={20}/></span>
                    </div>
                  }
              </div>
              <div className={classes.half}>
                {

                }
                <p>{item.summary} ₽</p>
                <button
                  onClick={() => setStateComponent(handleState(stateComponent, index))}
                >

                <span>
                  <BiChevronDown
                    size={20} />
                </span>
                </button>
              </div>
            </div>
            { stateComponent[index] && <OrderItem option={item}/>}
          </div>
        ))
      }
    </div>
  )
}


