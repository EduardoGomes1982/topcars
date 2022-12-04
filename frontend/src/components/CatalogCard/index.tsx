import "./styles.css";
import carImg from "../../assets/car.png";

export default function CatalogCard() {
    return (
        <div className="dsct-card-container">
            <img src={carImg} alt="CarroTop" />
            <h3>Audi Supra GT</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            <button id="btn-bay" key="btn-bay" type="submit">Comprar</button>
        </div>
    );
}