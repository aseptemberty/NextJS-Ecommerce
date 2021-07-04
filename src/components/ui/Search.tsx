import React, { useState } from "react"
import styles from '../../styles/components/ui/Search.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'

function frontendFilter(event, list) {
	const input = event.target.value
	return list.filter(item => item.toLowerCase().match(input.toLowerCase()))
}

export function Search({title, options, onSelect}) {

	const [itemList, input] = useState(options);
	return(
		<div id={styles.wrapper}>
			<div>
				<input placeholder='поиск' type="text" title={title} onChange={(e)=>input(frontendFilter(e, options))}/>
				<span className={styles.icon}><AiOutlineSearch  size={24}/></span>
				<ul className={styles.listGroup}>
					{
						itemList.length ?
							itemList.map((item)=>(
								<li data-category={item} key={item} onClick={()=>onSelect(item)}>
									{item}
								{/*	Вот тут вставить действие. Значит нужно передавать в функцию какой-нибудь еще колбэк*/}
								</li>
							))
							: <p>Ничего не найдено</p>
					}
				</ul>
			</div>
		</div>
	)
}

