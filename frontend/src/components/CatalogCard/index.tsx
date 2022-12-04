import carImg from "../../assets/car.png";
import CardButton from "../CardButton";
import "./styles.css";

export default function CatalogCard() {
    return (
        <div className="dsct-card-container">
            <img src={carImg} alt="CarroTop" />
            <h3>Audi Supra GT</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            <CardButton />
        </div>
    );
}