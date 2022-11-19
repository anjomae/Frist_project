import iconNotify from '../../assets/img/Notification_Button.svg'
import './styles.css'
function NotificationButton(){
    return(
        <div className="dsmeta-red-btn">
            <img src={iconNotify} alt="notificar"/>
        </div>
    )
}

    export default NotificationButton