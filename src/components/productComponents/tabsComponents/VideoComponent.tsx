import styles from '../../../styles/components/product/tabs/video.module.scss'
import TitleComponent from "../TitleComponent";
import ReactPlayer from 'react-player'

export default function VideoComponent(){
  return(
    <div className={styles.video}>
        <TitleComponent title="Видео"/>
        <div>
          <ReactPlayer
            url='https://www.youtube.com/embed/QZhI2qD3WHM'
            light={true}
          />
        </div>
    </div>
  )
}