import React from 'react'
import { resolve } from 'styled-jsx/css'
import { error } from './error';



async function takeTime(params) {
  await new Promise  ((params)=> {
    throw new error("This is manual error");
    setTimeout(params,3000)
  });
}
export default async function about ()
{
 await takeTime();
  return (
    <div><h1>This is about page</h1></div>
  )
}
