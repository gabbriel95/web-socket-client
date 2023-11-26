import { connectToServer } from "./socker-client";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <h1>WebSocket - Client</h1>
  <span id="server-status">offline</span>

  <ul id='clients-ul'>
   
  </ul>

  <form id="message-form">

    <input placeholder="message" id="message-input"/>
  
  </form>

  <h3>Messages</h3>

  <ul id="messages-ul">
      
  </ul>

  </div>
`;

connectToServer();
