function LabelForm(props){

    return(
        <div className="content-form">
            <label for={props.id}>{props.name} </label>
            <input type={props.type} id={props.id} placeholder={props.name} />
        </div>
    )
}

export default LabelForm;