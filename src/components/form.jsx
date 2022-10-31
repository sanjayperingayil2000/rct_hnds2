import '../index.css'
import React, {useState} from 'react';

export default function Form() {

    const [show,setshow]=useState("vb")
    const [hide,setHide]=useState("spcl")
    const [hide1,setHide1]=useState("spcl1")

    const ShowData = () =>{
            if(show==="vb"){setshow("vbnone");}
            if(hide==="spcl"){setHide("spcl1")}
            else if(hide==="spcl1"){setHide("spcl")}
            if(hide1==="spcl1"){setHide1("spcl")}
            else if(hide1==="spcl"){setHide1("spcl1")}
        }
    

const [name,setName]=useState("");
const [department,setDepartment]=useState("");
const [rating,setRating]=useState("");
const [list,setList]=useState([]);

const Add=(event)=>{
    event.preventDefault();
    const data={name, department, rating};
    setList((bb)=>[...bb,data]);

}
const Namein=(event)=>{
    setName(event.target.value);
  }
const Departmentin=(event)=>{
    setDepartment(event.target.value);
  }
const Ratingin=(event)=>{
    setRating(event.target.value);
  }
return (
    <>
    <div className={hide1}>
    <h1 className='text-center mt-3'>EMPLOYEE FEEDBACK FORM</h1>
        <div className='text-center'>
            <form onSubmit={Add}>
            <br/>
                <b>Name :&nbsp;</b>
                <input type="text" className="form-control bt" placeholder="Your Name" value={name} onChange={Namein} /><br/><br/>
                <b>Department :&nbsp;</b>
                <input type="text" className="form-control bt" placeholder="Name of department" value={department} onChange={Departmentin}  /><br/><br/>
                <b>Rating :&nbsp;</b>
                <input type="text" className="form-control bt" placeholder="Rating" value={rating} onChange={Ratingin} /><br/><br/>
                    <button  type="submit" id="submit-btn" onClick={ShowData}>
                    Submit
                    </button>
                <br/>
                <hr/>
            </form>
            </div>
            </div>

            <div className={hide} id="kk">
            <div id='parent' className={show}>
            {list.map((a)=><div className='child'>
            <span>name : {a.name} </span><br/>
            <span>department : {a.department}</span> <br/>
            <span> rating : {a.rating}</span>
            </div>)}
            </div>
            <button  type="submit" id="submit-btn" onClick={ShowData}>
            Back
            </button>
            
            </div>
            
        
            
            

    </>
)
}
