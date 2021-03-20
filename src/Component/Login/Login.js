import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

  console.log(watch("example"));
    return (
        <div>
        <Row className="login-form">
            <Col md={{ span: 6, offset: 3 }} className="form">
            <h4>Login</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input name="email" defaultValue="Email" ref={register({ required: true })} /><br/>
                {errors.email && <span>This field is required</span>}
                <input name="password" defaultValue="Password" ref={register({ required: true })} /><br/>
                {/* {errors.email && <span>This field is required</span>}
                <input name="email" defaultValue="Confirm Password" ref={register({ required: true })} /><br/>
                {errors.email && <span>This field is required</span>} */}
                 {/* <div className="form-group form-check">
                        <input name="acceptTerms" type="checkbox" ref={register} id="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
                        <label for="acceptTerms" className="form-check-label">Remember Me</label>
                        <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
                    </div> */}
                    <Link className="LoginForm" to="/forget">Forget Password</Link>
                    <br/>
                
                <input id="submitBtn" type="submit" />
                <h4 className="haveAccount">Don't have an account? <Link className="LoginForm" to="/signUp">Create an account</Link> </h4>
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

export default Login;