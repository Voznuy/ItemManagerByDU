export default function Footer(){
    const d = new Date()
    return(
        <footer>
            &#169; CoCIT, {d.getFullYear()}
        </footer>
    )
}