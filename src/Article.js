const Article = ({menu}) => {
    return (
        <div className="article">
        <h2>Ingrédients pour des pasta al limone : </h2>
        <ul>
            {menu.map(ingredient => (
                <li>{ingredient}</li>
            ) )}
        </ul>
        </div>
    );
}
 
export default Article;