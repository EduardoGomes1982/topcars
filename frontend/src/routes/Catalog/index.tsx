import CardsContainer from "../../components/CardsContainer";
import DefaultHeader from "../../components/DefaultHeader";
import SearchBar from "../../components/SearchBar";
import "./styles.css";

export default function Catalog() {
    return (
        <>
            <DefaultHeader />
            <main>
                <section id="searchbar-section">
                    <SearchBar />
                </section>
                <section id="catalog-cards-section">
                    <CardsContainer />
                </section>
            </main>
        </>
    );
}