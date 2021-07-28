import { useState } from 'react';
import {useParams, Link} from 'react-router-dom';
import User from './User';

const AddUser = ({status, list, addCallback})=>{
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [dept, setDept] = useState('');
    const [data, setData] = useState('');
    const {id:eid} = useParams();
    if (status === 'edit')
    {
        return(
            <div>
                Hello
                {
                    list.map((user)=>{
                        if(eid == user.id)
                        {
                            return <User {...user} />
                        }
                    })
                }
            </div>
        );
    }
    else if (status === 'add')
    {

        const handleIdChange = (e) =>{
            setId(e.target.value);
        }

        const handleNameChange = (e) =>{
            setName(e.target.value);
        }

        const handleDeptChange = (e) =>{
            setDept(e.target.value);
            const dataIn = {
                id : {id},
                name: {name},
                dept: {dept}
            };
            setData(dataIn);
        }

        return(
            <div>
                <from>
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
                    
                    <button onClick={()=>addCallback(data)}>Add</button>
                    <Link to={`/userlist`}>Go</Link>
                    
                </from>
            </div>
        );
    }
}

export default AddUser;