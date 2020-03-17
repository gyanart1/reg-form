import { LitElement, html, customElement } from "lit-element";

class MyTemplate extends LitElement {

  constructor() {
    super();
    console.log('this is working');
    const fName = document.querySelector('#fName');

  }

  render() {
    return html`
      <style>
        :host {
          font-size: 16px;
          width: 100%;
          box-sizing: border-box;
        }
        .reg-form {
          padding: 4%;
          border-radius: 10px;
          border: 1px solid #ccc;
          background-color: #fff;
          max-width: 800px;
          margin: 0 auto;
        }
        .form-group {
          width: 100%;
          display: block;
        }
        label {
          width: 29%;
          margin-right: 1%;
          display: block !important;
          float: left;
          text-align: right;
        }
        input, select {
          width: 43%;
          margin-right: 1%;
          border-radius: 4px;
          border: 1px solid #ccc;
          padding: 5px 10px;
          font-size: 14px;
          margin-bottom:10px;
        }
        input[type="email"] {
            width: 63%;
        }
        .form-group {
          margin-bottom: 10px;
        }
        .form-fields {
            width: 67%;
            float:left;
        }
        .clearfix:after {
            content: "";
            display: table;
            clear: both;
        }
        .col-6 {
          width: 50%;
          float: left;
        }
        button {
          background-color: blue;
          color: #fff;
          padding: 10px 20px;
          border-radius: 4px;
          border: 1px solid #009;
          cursor: pointer;
        }
      </style>
      <div class="reg-form">
        <form>
          <div class="row">
            <div class="form-group clearfix">
              <label class="mylabel">Name : </label>
              <div class="form-fields">
              <input
                type="text"
                class="form-control"
                id="fName"
                placeholder="Frist Name"
              />
              <input
                type="text"
                class="form-control"
                id="lName"
                placeholder="Last Name"
              />
              </div>
            </div>
            <div class="form-group clearfix">
              <label class="mylabel">Email ID : </label>
              <input
                type="email"
                class="form-control"
                id="emailId"
                placeholder="username@email.com"
              />
            </div>
            <div class="form-group clearfix">
              <label class="mylabel">Contact Number : </label>
              <input
                type="phone"
                class="form-control"
                id="telephone"
                placeholder="1234567890"
              />
            </div>
            <div class="form-group clearfix">
              <label class="mylabel">Date of Birth : </label>
              <input
                type="date"
                class="form-control"
                id="emailId"
                placeholder="dd-mm-yyyy"
              />
            </div>
            <div class="form-group clearfix">
              <label class="mylabel">Address : </label>
              <div class="form-fields">
              <input
                type="text"
                class="form-control"
                id="address1"
                placeholder="House number, Building name"
              />
              <input
                type="text"
                class="form-control"
                id="address2"
                placeholder="Street name, Area name"
              />
              <input
                type="text"
                class="form-control"
                id="address3"
                placeholder="City"
              />
              <input
                type="text"
                class="form-control"
                id="zip"
                placeholder="123456"
              />
              <select name="country" id="country">
                <Option value="">Select Country</Option>
                <Option value="IN">India</Option>
                <Option value="BD">Bangladesh</Option>
                <Option value="NP">Nepal</Option>
                <Option value="SL">Srilanka</Option>
                <Option value="BT">Bhutan</Option>
              </select>
            </div>
          </div>
          <div class="form-group clearfix">
            <label class="mylabel">Password : </label>
            <input
              type="phone"
              class="form-control"
              id="telephone"
              placeholder="1234567890"
            />
          </div>
          <div class="form-group clearfix">
            <label class="mylabel">Confirm password : </label>
            <input
              type="phone"
              class="form-control"
              id="telephone"
              placeholder="1234567890"
            />
          </div>
          <div class="form-group clearfix">
          <label>&nbsp;</label>
          <div class="form-fields">
            <button type="submit">Submit</button>
          </div>
          </div>
        </form>
      </div>
    `;
  }
}

customElements.define("my-template", MyTemplate);
