import img1 from "../../assets/img-card1.jpg";
import "./ImgCard.css";

export default function ImgCard(props) {
    console.log(props)
  return (
    <div className="image-card">
        <img src={img1} alt={props.caption|| 'Imagem Padrão'}/>
        <p className="image-card-caption">
            {props.caption}
        </p>
    </div>
  )

}
