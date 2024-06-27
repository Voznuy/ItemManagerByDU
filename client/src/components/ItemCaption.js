export default function ItemCaption (props){
    const item = props.item
    let bulletType = "bullet "
    let bulletTitle
    if (item.service_number === 1) {
        bulletType += "service_pozezna"
        bulletTitle = "Пожежна служба"
    } else if (item.service_number === 2) {
        bulletType += "service_sz"
        bulletTitle = "Служба зв'язку"
    } else if (item.service_number === 3) {
        bulletType += "service_ciz"
        bulletTitle = "Служба інфраструктурного забезпечення"
    } else if (item.service_number === 4) {
        bulletType += "service_rs"
        bulletTitle = "Речова служба"
    } else if (item.service_number === 5) {
        bulletType += "service_rao"
        bulletTitle = "РАО"
    } else if (item.service_number === 6) {
        bulletType += "service_tzo"
        bulletTitle = "ТЗО"
    } else if (item.service_number === 7) {
        bulletType += "service_mc"
        bulletTitle = "Медична служба"
    } else {
        bulletType += "default"
    }
    return (
        <div className={"item-title"}>
            <span className={bulletType} title={bulletTitle}>&#10687;	</span>	<span> {item.найменування}</span>
        </div>
    )
}
