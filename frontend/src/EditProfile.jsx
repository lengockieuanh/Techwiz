import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;



function ProductEdit() {
  const { id } = useParams();
  const [profile, setProfile] = useState({
    last_name: '', first_name: '',
    middle_name: '', dob: '', email: '',
    phone_number: '', country: '', gender: '',
    password: '', new_password: '', confirm_new_password: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/user_profiles/${id}`)
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error("Fetch error:", err));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${API_BASE_URL}/api/user_profiles/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
      });
      navigate('/user_profiles');
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);


  return (
    <div>
      <div className="firstLine">My Profile</div>
      <hr />
      <form onSubmit={handleUpdate}>
        <div className="container mt-0">
          <h5>Personal Information</h5>

          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <input
                className="form-control"
                type="text"
                value={profile.last_name}
                onChange={e => setProfile({ ...profile, last_name: e.target.value })}
                required
                placeholder="Last name"
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <input
                className="form-control"
                type="text"
                value={profile.first_name}
                onChange={e => setProfile({ ...profile, first_name: e.target.value })}
                required
                placeholder="First name"
              />
            </div>
          </div>

          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              value={profile.middle_name}
              onChange={e => setProfile({ ...profile, middle_name: e.target.value })}
              placeholder="Middle name"
            />
          </div>

          <div className="mb-3">
            <input
              className="form-control"
              type="date"
              value={profile.dob}
              onChange={e => setProfile({ ...profile, dob: e.target.value })}
              placeholder="Date of birth"
            />
          </div>

          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <input
                className="form-control"
                type="email"
                value={profile.email}
                onChange={e => setProfile({ ...profile, email: e.target.value })}
                required
                placeholder="Email"
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <input
                className="form-control"
                type="number"
                value={profile.phone_number}
                onChange={e => setProfile({ ...profile, phone_number: e.target.value })}
                required
                placeholder="Phone number"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 col-md-auto mb-2 mb-md-0">
              <label htmlFor="country" className="form-label me-2">Country</label>
              <select id="country" className="form-select d-inline-block w-auto rounded-0" required>
                <option value=""></option>
                <option value="VietNam">VietNam</option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="England">England</option>
              </select>
            </div>
            <div className="col-12 col-md-auto">
              <label className="form-label me-2">Gender</label>
              <div className="d-inline-block">
                <input type="radio" value="Male" name="gender" className="form-check-input me-1" /> Male
                <input type="radio" value="Female" name="gender" className="form-check-input ms-3 me-1" /> Female
              </div>
            </div>
          </div>


          <div className="mb-3 position-relative">
            <input
              className="form-control "
              type={showPassword ? "text" : "password"}
              value={profile.password}
              onChange={e => setProfile({ ...profile, password: e.target.value })}
              required
              placeholder="Password"
            />
            <span
              className="position-absolute top-50 end-0 translate-middle-y me-2"
              style={{ cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "✖" : "👁️"}
            </span>
          </div>
          <button class="btn btn-danger rounded-0" type="submit">Save changes</button>

          <br /> <br />
          <h5>Password Reset</h5>

          
          <div className="mb-3 position-relative">
            <input
              className="form-control "
              type={showNewPassword ? "text" : "password"}
              value={profile.new_password}
              onChange={e => setProfile({ ...profile, new_password: e.target.value })}
              required
              placeholder="New password"
            />
            <span
              className="position-absolute top-50 end-0 translate-middle-y me-2"
              style={{ cursor: "pointer" }}
              onClick={() => setShowNewPassword(!showNewPassword)}>
              {showNewPassword ? "✖" : "👁️"}
            </span>
          </div>

          <div className="mb-3 position-relative">
            <input
              className="form-control "
              type={showConfirmNewPassword ? "text" : "password"}
              value={profile.confirm_new_password}
              onChange={e => setProfile({ ...profile, confirm_new_password: e.target.value })}
              required
              placeholder="New password"
            />
            <span
              className="position-absolute top-50 end-0 translate-middle-y me-2"
              style={{ cursor: "pointer" }}
              onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}>
              {showConfirmNewPassword ? "✖" : "👁️"}
            </span>
          </div>

          <button class="btn btn-danger rounded-0" type="submit">Reset Password</button>
        </div>
      </form>


    </div>
  );
}

export default ProductEdit;