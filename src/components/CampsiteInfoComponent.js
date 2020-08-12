/*
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
  constructor(props) {
      super(props);
      this.state = {
          Campsite: null
      };
  }
  renderCampsite( campsite ) {
      return(
          <div className="col-md-5 m-1">
              <Card>
                 <CardImg top src={campsite.image} alt={campsite.name} />
                 <CardBody>
                      <CardTitle>{campsite.name}</CardTitle>
                      <CardText>{campsite.description}</CardText>
                 </CardBody>
              </Card>
          </div>)
  };
  renderComments(comments) {
      if (comments) {
        return (
          <div className="col-md-5 m-1" />
            <h4>Comments</h4>
            <p onClick={() => this.props.renderComments(comments)} /> {
              this.campsites.comments.map(comments =>
              <p key={comments.id}>{this.campsite.comment.text}<br />
              {this.campsites.comments.author}{this.campsite.comments.date}
              {}
            }
            {comments.map((comment) => {
              return (
              <div key={comment.id}>
                <p>
                 {comment.text}
                 {comment.author}
                 {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                 }).format(new Date(Date.parse(comments.date)))}
                 </p>)
            };
                  </div>
              );
            }
          return <div />
              
      }
      
    

  render() {
      if(this.props.campsite){
          return (
            <div className="container">
              <div className="row" >
              {this.renderCampsite(this.props.campsite)}
        {this.renderComments(this.props.campsite.comments)}
              </div>
          );
      
    return  <div />;
  

export default CampsiteInfo;



/*

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
 */



import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderCampsite({campsite}) {
    return (
      <div className="col-md-5 m-1"> 
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
  

function RenderComments({comments}){
    if(comments) {
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map(comment => {
            return(
              <div key={comment.id}>
              <p>
              {comment.text} 
              <br />
              - - {comment.author},
              {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
              </p>
            </div>
            );
          })}
        </div>
      );
    }
  return <div />
  
  }

function CampsiteInfo(props) {
  // Inside its render method, check if an object with the  //name "campsite" (passed in via props) can be evaluated 
  // as truthy
 if(props.campsite) {
   return (
   <div className="container">
    <div className="row">
     <RenderCampsite campsite={props.campsite} />
     <RenderComments comments={props.campsite.comments} />   
      </div>
   </div>
   
   );
 }
return <div />;
  
 }


export default CampsiteInfo;

  
  
  












