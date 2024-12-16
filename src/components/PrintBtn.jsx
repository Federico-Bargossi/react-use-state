function PrintBtn({title , id}){

        if(title === "CSS"){
            return (<button className="btn-small btn" key={id}>{title}</button>)
        }if(title === "JavaScript"){
            return (<button className="btn" key={id}>{title}</button>)
        } else {
            return (<button className="btn btn-md" key={id}>{title}</button>)
        }
}

export default PrintBtn;

