import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Contact(){
  return(
    <div className="container">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/home">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
      </Breadcrumb>
      <h1>Contact Us</h1>
      <hr/>
      <div className="row row-content p-2">
          <div className="col-12">
            <h3 className="text-center">Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1 d-flex ml-auto justify-content-end">
            <address>
              <h5>Our Address</h5>
              121, Clear Water Bay Road<br />
              Clear Water Bay, Kowloon<br />
              HONG KONG<br />
              <i className="fa fa-phone"></i> +852 1234 5678<br />
              <i className="fa fa-fax"></i> +852 8765 4321<br />
              <i className="fa fa-envelope"></i> <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1 d-flex mb-auto justify-content-center">
            <div className="btn-group" role="group">
              <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
              <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
              <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Contact;
