const Personnage = (props) => {
    return ( 
        <div>
            <h2>CIAO {props.perso.nom}</h2>
            <button onClick={props.rename}>CHANGE PERSO</button>
        </div>
     );
}
 
export default Personnage;