import CatalogCard from "../CatalogCard";
import "./styles.css";

export default function CardsContainer() {
    return (
        <div className="dsct-container dsct-cards-container">
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
        </div>
    );
}