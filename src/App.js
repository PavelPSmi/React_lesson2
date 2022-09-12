import './App.css';
import React, {useState} from "react"
export function App(){
  const [messageList,setMessageList] = useState([]);
  
  const handleSubmit =(event) =>{
    event.preventDefault();
    const target = event.target;
    const author = target.author.value;
    const text = target.text.value;

    setMessageList(prevState =>[...prevState,{
      id:giveId(prevState),
      author:author,
      text:text
    }])
  }
  function giveId(arr){
    return arr.length ? arr[arr.length-1].id +1:0
  }

  function botAnswer(){
    const lastAuthor = messageList[messageList.length-1];
    if(lastAuthor && lastAuthor.author){
      setMessageList(prevState=>[...prevState,{
        id:giveId(prevState),
        text:`Message user${lastAuthor.author} send`
      }])
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="author"/>
        <br/>
        <input type="text" name="text"/>
        <br/>
        <button type="submit" value="send">send</button>
      </form>
      {messageList.map((message) => {
        return (
          <div>
            {message.author && (
              <p>
                <span>Пользователь:</span>
                {message.author}
              </p>
            )}
            <p>
              {message.author && <span> Текст:</span>} {message.text}
            </p>
          </div>
        );
      })}
    </div>
  );

}
export default App;
