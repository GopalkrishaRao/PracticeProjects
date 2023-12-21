import React from 'react';
import HookNavbar from './HookNavbar';
import Usestate from './Usestate/UsestateHook';
import UseEffect from './UseEffectHook/UseEffect';
import Useref from './UseRef/Useref';
import UseReducer from './UseReducer/Usereducer';
import CustomHook from './CustomHook/CustomHook';

export default function Hooks_homepage() {
  return (
    <>
        <HookNavbar/>
        <UseEffect/>
        <Usestate/>
        <Useref/>
        <UseReducer/>
        <CustomHook/>
    </>
  )
}
