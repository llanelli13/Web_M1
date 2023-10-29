function Card(props) {
    return (
        <div className="card">
            <img src={props.logo} alt={props.name} />
        </div>
    );
}
