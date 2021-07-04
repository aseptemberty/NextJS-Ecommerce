import styles from '../../../styles/components/ui/filter/filterComponent.module.scss'
import { ImCross } from 'react-icons/im'
import { BiChevronDown } from 'react-icons/bi'
import React, { useState } from 'react'
import FilterItem from './filterItem'

const filterOptions=[
  {
    title:'Цена',
    options:[{
      range:
        {
          min:20,
          max:1200
        }
      ,
      tags:[
        {
          name:'Любая цена',
          amount:2024
        },
        {
          name:'Менее 30 000 ₽',
          amount: 132
        },
        {
          name:'30 000 ₽ - 40 000 ₽ ',
          amount:202
        },
        {
          name:'40 000 ₽ - 50 000 ₽ ',
          amount:202
        },
        {
          name:'50 000 ₽ - 60 000 ₽ ',
          amount:202
        },
      ]
    }]
  },
  {
    title:'Цена',
    options:[{
      range:
        {
          min:20,
          max:1200
        }
      ,
      tags:[
        {
          name:'Любая цена',
          amount:2024
        },
        {
          name:'Менее 30 000 ₽',
          amount: 132
        },
        {
          name:'30 000 ₽ - 40 000 ₽ ',
          amount:202
        },
        {
          name:'40 000 ₽ - 50 000 ₽',
          amount:202
        },
        {
          name:'50 000 ₽ - 60 000 ₽',
          amount:202
        },
      ]
    }]
  }
]

export default function FilterComponent(){

  const [stateComponent, setStateComponent] = useState([false, false, false]);
  const handleState = (state, index) => {
    let stateCopy =  state.slice()
    stateCopy[index] = !stateCopy[index]
    return stateCopy
  }


  return(
    <div className={styles.wrapper}>
      <div>
        {
          filterOptions.map((option,index)=>(
            <>
              <div className={styles.title}>
                <button
                  onClick={() => setStateComponent(handleState(stateComponent, index))}
                >

                <span>
                  <BiChevronDown
                    size={20} />
                </span>
                  <p>{filterOptions[index].title}</p>
                </button>
              </div>

              { stateComponent[index] && <FilterItem options={option.options[0]}/>}
            </>

          ))
        }

      </div>
      <button className={styles.clearButton}>
        <span>
          <ImCross />
        </span>
        <p>Очистить фильтр</p>
      </button>
    </div>
  )
}