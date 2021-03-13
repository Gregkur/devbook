import React from 'react'

export default function Landing() {
    return (
        <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Devbook</h1>
            <p className="lead">
              Create a developer profile/portfolio, share posts and get help from
              other developers
            </p>
            <div className="buttons">
              <a href="register.html" className="btn btn-primary rounded">Sign Up</a>
              <a href="login.html" className="btn btn-light rounded">Login</a>
            </div>
          </div>
        </div>
      </section>
    )
}
