import React, { Component } from 'react';

import Resources from '../../Cards/resource';
class Resource extends Component {
    render() {
        console.log('resourve');
        return (
            <div>
          
          <h5 class=" info-color white-text text-center py-4">
    <strong>Students Resource</strong>
</h5>
                
            <div class="container r">
 
            <br/>
 <div class="float-right"><button class="btn btn-default"> <i class="fas fa-plus ml-1"></i></button></div>
 
 <br/> 
 <br/>
  
 <br/>
<Resources/>

           </div>    
            
            </div>
        );
    }
}

export default Resource;
