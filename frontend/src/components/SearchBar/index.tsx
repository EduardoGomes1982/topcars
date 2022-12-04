import "./styles.css";

export default function SearchBar() {
    return (
        <form id="dsct-form-searchbar" className="dsct-container">
            <div className="dsct-searchbar">
                <input id="txt-searchbar" type="text" placeholder="Digite sua busca" />
                <input id="btn-searchbar" type="button" value="Buscar" />
            </div>
        </form>
    );
}