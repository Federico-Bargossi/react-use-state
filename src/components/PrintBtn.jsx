function PrintBtn({title , id , onClick}){

        if(title === "CSS"){
            return (<button className="btn-small btn" onClick={onClick} key={id}>{title}</button>)
        }if(title === "JavaScript"){
            return (<button className="btn" onClick={onClick} key={id}>{title}</button>)
        } else {
            return (<button className="btn btn-md" onClick={onClick} key={id}>{title}</button>)
        }
}

export default PrintBtn;

