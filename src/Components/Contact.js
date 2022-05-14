/* eslint react/prop-types: 0 */
import React, { Suspense } from "react";
import image from "./images/a3.jpg";
export default class Contact extends React.Component {
  render() {
    return (
        <div>
            <div class="grid_3">
  <div class="container">
  <h1>Contact Us</h1>
   <div class="grid_5">
      <p>Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient. montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.</p>
      <address class="addr row">
        <dl class="grid_4">
            <dt>Address :</dt>
            <dd>
                dummy, <br />
                dummy.
            </dd>
        </dl>
        <dl class="grid_4">
            <dt>Telephones :</dt>
            <dd>
                0900 786 01 <br />
                0900 786 01
            </dd>
        </dl>
        <dl class="grid_4">
            <dt>E-mail :</dt>
            <dd><a href="">mail@UrgentRishta.com</a></dd>
        </dl>
      </address>
    </div>
   </div>
</div>
<div class="about_middle">
  <div class="container">
	 <h2>Contact Form</h2>
	  <form id="contact-form" class="contact-form">
        <fieldset>
          <input type="text" class="text" placeholder="Name"  onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" />
          <input type="text" class="text" placeholder="Phone"  onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Phone';}" />
          <input type="text" class="text" placeholder="Email"  onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" />
          <textarea placeholder="Message" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message';}"></textarea>
          <input name="submit" type="submit" id="submit" value="Submit" />
        </fieldset>
      </form>
  </div>
</div>
    </div>
    );
  }
}
