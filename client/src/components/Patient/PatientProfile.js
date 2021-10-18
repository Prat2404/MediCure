import React from 'react';

const PatientProfile = () => {
  return (
    <div>
      <div class='container'>
        <div class='row gutters'>
          <div class='col-md-12 col-lg-12 col-xl-12'>
            <div class='card'>
              <div class='card-body'>
                <form>
                  <div class='row form-row'>
                    <div class='col-12 col-md-12'>
                      <div class='form-group'>
                        <div class='change-avatar'>
                          <div class='profile-img'>
                            <img src='...jpg' alt='User' />
                          </div>
                          <div class='upload-img'>
                            <div class='change-photo-btn'>
                              <span>
                                <i class='fa fa-upload'></i> Upload Photo
                              </span>
                              <input type='file' class='upload' />
                            </div>
                            <small class='form-text'>
                              Allowed JPG, GIF or PNG. Max size of 2MB
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='col-12 col-md-6'>
                      <div class='form-group'>
                        <label>First Name</label>
                        <input type='text' class='form-control' />
                      </div>
                    </div>
                    <div class='col-12 col-md-6'>
                      <div class='form-group'>
                        <label>Last Name</label>
                        <input type='text' class='form-control' />
                      </div>
                    </div>
                    <div class='col-12 col-md-6'>
                      <div class='form-group'>
                        <label>Date of Birth</label>
                        <div class='cal-icon'>
                          <input
                            type='date'
                            class='form-control datetimepicker'
                          />
                        </div>
                      </div>
                    </div>
                    <div class='col-12 col-md-6'>
                      <div class='form-group'>
                        <label>Blood Group</label>
                        <select class='form-control select'>
                          <option>A-</option>
                          <option>A+</option>
                          <option>B-</option>
                          <option>B+</option>
                          <option>AB-</option>
                          <option>AB+</option>
                          <option>O-</option>
                          <option>O+</option>
                        </select>
                      </div>
                    </div>
                    <div class='col-12 col-md-6'>
                      <div class='form-group'>
                        <label>Email ID</label>
                        <input type='email' class='form-control' />
                      </div>
                    </div>
                    <div class='col-12 col-md-6'>
                      <div class='form-group'>
                        <label>Mobile</label>
                        <input type='text' class='form-control' />
                      </div>
                    </div>
                    <div class='col-12'>
                      <div class='form-group'>
                        <label>Address</label>
                        <input type='text' class='form-control' />
                      </div>
                    </div>
                    <div class='col-12 col-md-6'>
                      <div class='form-group'>
                        <label>City</label>
                        <input type='text' class='form-control' />
                      </div>
                    </div>
                    <div class='col-12 col-md-6'>
                      <div class='form-group'>
                        <label>State</label>
                        <input type='text' class='form-control' />
                      </div>
                    </div>
                    <div class='col-12 col-md-6'>
                      <div class='form-group'>
                        <label>Pin Code</label>
                        <input type='text' class='form-control' />
                      </div>
                    </div>
                  </div>
                  <div class='submit-section'>
                    <button type='submit' class='btn btn-primary submit-btn'>
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
