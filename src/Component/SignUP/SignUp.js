import React from 'react';
import { Button, ButtonToolbar, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SIgnUp = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

  console.log(watch("example"));
    return (
        <div>
            <Row className="login-form">
            <Col md={{ span: 6, offset: 3 }} className="form">
            <h4>Create an account</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="Name" ref={register({ required: true })} /><br/>
                {errors.name && <span>This field is required</span>}
                <input name="email" defaultValue="Username or Email" ref={register({ required: true })} /><br/>
                {errors.email && <span>This field is required</span>}
                <input name="password" defaultValue="Password" ref={register({ required: true })} /><br/>
                {errors.email && <span>This field is required</span>}
                <input name="confirm" defaultValue="Confirm Password" ref={register({ required: true })} /><br/>
                {errors.confirm && <span>This field is required</span>}
                 
                <input id="submitBtn" type="submit" />
                <h4 className="haveAccount">Already have an account? <Link className="LoginForm" to="/login">Login</Link> </h4>
            </form>
            </Col>
        </Row>
        <Row className="last-area">
            <Col  md={{ span: 6, offset: 3 }} >
                <Button className="signIn"><img md={6} src="http://expresswriters.com/wp-content/uploads/2015/09/google-new-logo-450x450.jpg"/> Continue with Google</Button>
                <Button className="signIn"><img md={6} src="https://www.facebook.com/images/fb_icon_325x325.png"/> Continue with Facebook</Button>
            </Col>
        </Row>
        </div>
    );
};

export default SIgnUp;