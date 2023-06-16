import './ButtonAttom.css'



function ButtonAttom({button_content}) {
    return(
    <>
    <button className="button">
       {button_content}
    </button>
    </>
    );
}
export default ButtonAttom