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

<Resources/>

           </div>    
            
            </div>
        );
    }
}

export default Resource;
