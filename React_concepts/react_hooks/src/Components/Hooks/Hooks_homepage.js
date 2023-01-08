import React from 'react';
import HookNavbar from './HookNavbar';
import Usestate from './Usestate/UsestateHook';
import UseEffect from './UseEffectHook/UseEffect';

export default function Hooks_homepage() {
  return (
    <>
        <HookNavbar/>
        <UseEffect/>
        <Usestate/>
    </>
  )
}
