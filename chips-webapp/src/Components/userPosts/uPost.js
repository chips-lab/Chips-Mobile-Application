import React, { Component } from 'react';
import './u.css';
class uPost extends Component {
    render() {
        return (
            <div>
                <h5 class=" info-color white-text text-center py-4">
    <strong>MAKE A Post</strong>
</h5>


         <section class="wrapper">
             

<br/>
<form>
			<span class="section-header">XD</span>
	
	<div class="form-group">
		<label class="legend-top">
			<input type="text" placeholder="Full Name" />
			<span>Full Name</span>
		</label>
	</div>

	<div class="form-group">
		<label class="legend-top">
			<input type="text" placeholder="Full Name" />
			<span>Full Name</span>
		</label>
	</div>
	
		<span class="section-header">Also works for Select</span>
        <textarea id="textarea" class="form-control mb-4" placeholder="Textarea"></textarea>


        <div id="file-upload-form" class="uploader">
  <input id="file-upload" type="file" name="fileUpload" accept="image/*" />

  <label for="file-upload" id="file-drag">
    <img id="file-image" src="#" alt="Preview" class="hidden"/>
    <div id="start">
      <i class="fa fa-download" aria-hidden="true"></i>
      <div>Select a file or drag here</div>
      <div id="notimage" class="hidden">Please select an image</div>
      <span id="file-upload-btn" class="btn btn-primary">Select a file</span>
    </div>
    <div id="response" class="hidden">
      <div id="messages"></div>
      <progress class="progress" id="file-progress" value="0">
        <span>0</span>%
      </progress>
    </div>
  </label>
</div>


</form>


         
</section>
</div>
            
        );
    }
}

export default uPost;
