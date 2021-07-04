import styles from '../../../styles/components/ui/filter/filterItem.module.scss'
import { useState } from 'react'
import { Checkbox, TextInput } from '../Inputs'


export default function FilterItem({options}){
  const range = options.range
  const tags = options.tags
  const [toggle, setToggle] = useState(false);
  const checkOpen = (index) => {
    return (index < 4) || toggle
  }
  const isNeedButton = tags.length > 4

  return(
      <div className={styles.item}>
        {range.max &&
          <div className={styles.range}>
            <div className={styles.half}>
              <TextInput placeholder={`от ${range.min}`} center={true}/>
            </div>
            <div className={styles.half}>
              <TextInput placeholder={`до ${range.max}`} center={true}/>
            </div>
          </div>
        }
        {<div className={styles.column}>
          {tags.length && tags.map((tag, index) => (
            checkOpen(index) &&
            <div className={styles.inputBox}>
              <div className={styles.checkBox}>
                <Checkbox />
                <p>{tag.name}</p>
                <p className={styles.amount}>{tag.amount}</p>
              </div>
            </div>
          ))}
          {isNeedButton && <button  className={styles.showMore} onClick={() => setToggle(!toggle)}> Показать еще</button>}
        </div>}
      </div>

  )
}