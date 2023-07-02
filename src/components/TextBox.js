import React, {useState} from 'react'

export default function TextBox() {
        
        //variables
        const[colour_name,fun_colour_name]=useState('black')
        const[colour_name2,fun_colour_name2]=useState('white')
        const [mode_dark_white,mode_switch_fun]=useState('Switch To Dark Mode')
        const [button_style,fun_buttonstyle]=useState('btn btn-danger')
        const [txt,fun_txt] = useState('');
        const [q,fun_q] = useState(1)

        const style_text = {
            color : colour_name,
            
        };
        const containerStyle = {
            border: '1px solid black',
            padding: '10px',
            borderRadius :'10px',
            borderColor : colour_name,
            backgroundColor: colour_name2,
            color : colour_name
        };
        //functions

        

        const mode_change =()=>{
            console.log('Called')
            if(q===1){
            fun_colour_name('white')
            fun_colour_name2('black')
            mode_switch_fun('Switch To Light Mode');
            fun_buttonstyle('btn btn-success ')
            fun_q(1000)
            }
            else{
            fun_colour_name2('white')
            fun_colour_name('black')
            mode_switch_fun('Switch To Dark Mode');
            fun_buttonstyle('btn btn-danger')
            fun_q(1)
            }

            
        }
        const handlePasteFromClipboard = async() => {
            const p = await navigator.clipboard.readText();
            fun_txt(txt + p)
        }

        const changefunction=(event)=>{
            fun_txt(event.target.value)
        }
        const changetocaps=()=>{
            let l1 = txt
            fun_txt(l1.toUpperCase())
        }
        const changetosmall=()=>{
            let l1 = txt
            fun_txt(l1.toLowerCase())
        }
        const clear_all=()=>{
            fun_txt("")
        }
        const get_value=()=>{
            const alphabetRegex = /[a-zA-Z]/g;
            const alphabetCount = (txt.match(alphabetRegex) || []).length;
            return alphabetCount
        }
        const getNumberCount = () => {
            const numberRegex = /[0-9]/g;
            const numberMatches = txt.match(numberRegex);
            const numberCount = numberMatches ? numberMatches.length : 0;
            return numberCount;
          };
          const getSpecialCharCount = () => {
            const specialCharRegex = /[^a-zA-Z0-9\s]/g;
            const specialCharMatches = txt.match(specialCharRegex);
            const specialCharCount = specialCharMatches ? specialCharMatches.length : 0;
            return specialCharCount;
          };
        return (
        <>
        <div className='mb-2' style={style_text}>
            <div className='container' style={containerStyle}>    
                <div className="mb-4">
                    <label htmlFor="box1" className="form-label">Enter Text Below</label>
                    <textarea className="form-control" value={txt} onChange={changefunction} id="box1" rows="12" style={containerStyle}></textarea>

                </div>
                <div className="mb-4">
            
                <button className = {button_style} style = {{marginRight: 10 + 'px'}} onClick={changetocaps}>Click To Captalize</button>
                <button className = {button_style} style = {{marginRight: 10 + 'px'}} onClick={changetosmall}>Click To Small</button>
                <button className = {button_style} style = {{marginRight: 10 + 'px'}} onClick={clear_all}>Click To Clear</button>
                <button className = {button_style} onClick={handlePasteFromClipboard}>Paste from Clipboard</button>
                
                </div>

            </div>
            <div className='container mb-3 ' style={containerStyle}>

                <label className='form-label'>Total words present are {txt.split(" ").length-1}</label>
                <br> 
                </br>
                <label className='form-label'>Total characters present are {txt.length}</label>
                <br></br>
                <label className="form-label">Number of Alphabets is {get_value()}</label>
                <br></br>
                <label className="form-label">Number of Numerics is {getNumberCount()}</label>
                <br></br>
                <label className="form-label">Number of Special Chars is {getSpecialCharCount()}</label>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="dark_white_mode" onChange={mode_change}/>
                    <label>{mode_dark_white}</label>    
                </div>

            </div>
            </div>
        </>
        )
    }