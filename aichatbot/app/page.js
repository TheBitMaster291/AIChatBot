"use client"

import OpenAI from "openai";
import { useState } from "react";


const openai=new OpenAI({
  apiKey:process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser:true,
})

export default function Home() {

  const [userInput,setUserInput]=useState('');
  const [chatHistory,setChatHistory]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  
  const handleUserInput=async()=>{
    setIsLoading(true);
    setChatHistory((prevChat)=>[
      ...prevChat,
      {role:'user',content:userInput},
    ]);
    const chatCompletion= await openai.chat.completions.create({
      messages:[...chatHistory,{role:'assistant',content:userInput}],
      model:'gpt-3.5-turbo',
    });
  
    setChatHistory((prevChat)=>[
      ...prevChat,
      {role:'assistant',content:chatCompletion.choices[0].message.content},
    ]);
  
    setUserInput('');
    setIsLoading(false);
  }



  return (
  <div className="">

  </div>
  );
}
