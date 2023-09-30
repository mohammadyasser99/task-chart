import '../UI/Card.css'
//this is a wrapper component 
//we must pass the classes as a string
function Card(props) {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}
            </div>
    )
}

export default Card;