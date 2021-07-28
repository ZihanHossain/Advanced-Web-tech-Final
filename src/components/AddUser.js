import { useState } from 'react';
import {useParams, Link} from 'react-router-dom';
import User from './User';

const AddUser = ({status, list, callback})=>{
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [dept, setDept] = useState('');
    const [data, setData] = useState('');
    const {id:eid} = useParams();

    const handleIdChange = (e) =>{
        setId(e.target.value);
    }

    const handleNameChange = (e) =>{
        setName(e.target.value);
    }

    const handleDeptChange = (e) =>{
        setDept(e.target.value);
    }

    if (status === 'edit')
    {

        const onSubmit = (e) =>{
            e.preventDefault();
            console.log(data);
            callback({ id: id, name: name, dept: dept }, eid);
        }
        console.log(list);

        return(
            <div>
                Hello
                {
                    list.map((user)=>{
                        if(eid == user.id)
                        {
                            return <User {...user }/>
                        }
                    })
                }
                
                    <label>
                        Id:
                        <input name="id" onChange={handleIdChange}/>
                    </label>
                    <label>
                        Name:
                        <input name="name" onChange={handleNameChange}/>
                    </label>
                    <label>
                        Dept:
                        <input name="dept" onChange={handleDeptChange}/>
                    </label>
                    {/* onClick={(event) => (!id || !name || !dept) ? event.preventDefault() : ()=>addCallback(data)} */}
                    
                    <button onClick={onSubmit}>Add</button>
                    <Link to={`/userlist`}>Go</Link>
                    
            </div>
        );
    }
    else if (status === 'add')
    {

        const onSubmit = (e) =>{
            e.preventDefault();
            console.log(data);
            callback({ id: id, name: name, dept: dept });
        }

        return(
            <div>
                    <label>
                        Id:
                        <input name="id" onChange={handleIdChange}/>
                    </label>
                    <label>
                        Name:
                        <input name="name" onChange={handleNameChange}/>
                    </label>
                    <label>
                        Dept:
                        <input name="dept" onChange={handleDeptChange}/>
                    </label>
                    {/* onClick={(event) => (!id || !name || !dept) ? event.preventDefault() : ()=>addCallback(data)} */}
                    
                    <button onClick={onSubmit}>Add</button>
                    <Link to={`/userlist`}>Go</Link>
            </div>
        );
    }
}

export default AddUser;