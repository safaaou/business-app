import './categories.scss';

function Categories (props) {
    const { name,options } = props;

    const handleSave = (e) => {
        e.preventDefault();
        let res = [];
        
        const data= e.target.elements[name];
        for(const column of data){
            if(column.checked === true){
                res.push(column.value);
            }
        }
        return props.onSaveData(res);
    }

    return (
         <>   
            
            <form onSubmit={handleSave}>
            <div className="wrapper_categories">  
            {options.map((op, index) => (
                            
                            <div key={index}>
                                <input type="checkbox" name={name} id={op.value} value={op.value}/>
                                <label htmlFor={op.value}>{op.texte}</label>
                            </div>
                            
            ))}         
            
            
            </div>

            <div><button className="next" type="submit">Next</button></div>
            </form>
        </>
            
            

            
);

}

export default Categories;