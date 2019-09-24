import * as React from 'react';
import {  View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import axios from 'axios';


import Home from './Home';
import Business from './Business';
import Detail from './Detail';
import Entertainment from './Entertainment';
import Technology from './Technology';
import Health from './Health';
import Science from './Science';
import Sports from './Sports';


const stack=createStackNavigator(
  
{

  home:{
    screen:Home
    
  },

  business:{
    screen:Business
    
  },
   entertainment:{
    screen:Entertainment
    
  },
 
  detail:{
    screen:Detail
    
  },
    technology:{
    screen:Technology
  },

health:{
    screen:Health
    
  },
science:{
    screen:Science
    
  },
sports:{
    screen:Sports
    
  },
},


 

{
    initialRouteName:'home'//ana ekranım bu demektir.
  }

);
export default createAppContainer(stack);


