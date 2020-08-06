import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderCampsite({campsite}) {

}

function RenderComments({comments}) {
}

function CampsiteInfo(props) {
  if(props.campsite) {
    return (
      <div className="container">
      <div className="row">
      <div className="col">
          <Breadcrumb>
              <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
          </Breadcrumb>
          <h2>{props.campsite.name}</h2>
          <hr />
      </div>
  </div>
        <div className="row">
            <RenderCampsite campsite={props.campsite} />
            <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  }
  return <div />;
}
 
export default CampsiteInfo;

