import "./App.css";

function App() {
  return (
    <>
      <main className="">
        <div className="container">
          <div className="box">
            <div className="title">
              <h1 className="">
                Contact Us
              </h1>
            </div>
            <div className="contactFrom">
              <div className="name-col">

                <div className="firstname">
                  <div className="firstName">
                    First Name <span className="star">*</span>
                  </div>
                  <input 
                    type="text" 
                    name="fname" 
                    className="fname" 
                    required 
                  />
                  {/* error */}
                  {/* This field is required */}
                </div>

                <div className="firstname">
                  <div className="firstName">
                    Last Name <span className="star">*</span>
                  </div>
                  <input 
                    type="text" 
                    name="fname" 
                    className="fname" 
                    required 
                  />
                  {/* error */}
                  {/* This field is required */}
                </div>

              </div>
              
              <div className="emailForm">
                <div className="Email">
                  Email Address <span className="star">*</span>
                </div>
                <input 
                  type="email" 
                  name="email" 
                  pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" 
                  className="email" 
                  required 
                />
                {/* error */}
                {/* This field is required */}
              </div>

              <div className="name-col">

                <div className="queryType">
                  <div className="queryType-1">
                    <h4 className="queryType-name">
                      Query Type <span className="star">*</span>
                    </h4>
                    <div className="queryType-btn">
                      <input 
                        type="radio" 
                        name="btn" 
                        className="btn" 
                        required 
                      />
                      <span className="queryType-btn--title">
                        General Enquiry
                      </span>
                    </div>
                    <div className="queryType-btn">
                      <input 
                        type="radio" 
                        name="btn" 
                        className="btn" 
                        required 
                      />
                      <span className="queryType-btn--title">
                        Support Request
                      </span>
                    </div>
                  </div>
                  {/* error */}
                  {/* Please select a query type */}
                </div>

              </div>

            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default App;
