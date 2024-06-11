import "./App.css";

function App() {

  function submit(){
    // alert('submit')
  }

  return (
    <>
      <main className="">
        <div className="container">
          <div className="box">
            <div className="title">
              <h1 className="title-name">
                Contact Us
              </h1>
            </div>
            <div className="contactFrom">
              <div className="name-col">

                <div className="firstname">
                  <div className="form-title">
                    First Name <span className="star">*</span>
                  </div>
                  <input 
                    type="text" 
                    name="fname" 
                    className="fname" 
                    required 
                  />
                  {/* error */}
                  <div className="error">
                    This field is required
                  </div>
                </div>

                <div className="firstname">
                  <div className="form-title">
                    Last Name <span className="star">*</span>
                  </div>
                  <input 
                    type="text" 
                    name="fname" 
                    className="fname" 
                    required 
                  />
                  {/* error */}
                  <div className="error">
                    This field is required
                  </div>
                </div>

              </div>
              
              <div className="emailForm">
                <div className="form-title">
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
                {/* error */}
                <div className="error">
                  Please enter a valid email address
                </div>
                
              </div>
              
              <div className="form-title">
                Query Type <span className="star">*</span>
              </div>
              <div className="wrapper">
                <label for="option-1" className="option option-1">
                  <input 
                    type="radio" 
                    name="select" 
                    id="option-1" 
                    className="dot" 
                  />
                  {/* <div className="dot"></div> */}
                  <span>General Enquiry</span>
                </label>

                <label for="option-2" className="option option-2">
                  <input 
                    type="radio" 
                    name="select" 
                    id="option-2" 
                    className="dot" 
                  />
                  {/* <div className="dot"></div> */}
                  <span>Support Request</span>
                </label>
              </div>

              <div className="wrapper-1">
                <div className="form-title form-title-1">
                  Message <span>*</span>
                </div>
                <textarea
                  rows={4}
                  cols={70}
                >

                </textarea>

              </div>

              <div className="bottom">
                <div className="bottom-content">
                  <input 
                    type="checkbox" 
                  />
                  <div className="form-title consent">
                    I consent to being contacted by the team <span>*</span>
                  </div>
                </div>

              </div>

              <input 
                type="submit" 
                className="btn"
                onClick={submit()}
              />

            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default App;
