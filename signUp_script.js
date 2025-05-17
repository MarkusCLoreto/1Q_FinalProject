document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    ['FirstName','LastName','Sex','Email','Password','Reason'].forEach(id => {
      document.getElementById('err' + id).textContent = '';
    });
  
    const firstName = document.getElementById('firstName').value.trim();
    const lastName  = document.getElementById('lastName').value.trim();
    const sexInput  = document.querySelector('input[name="sex"]:checked');
    const email     = document.getElementById('email').value.trim();
    const password  = document.getElementById('password').value;
    const reason    = document.getElementById('reason').value.trim();
  
    let valid = true;
  
    if (!firstName) {
      valid = false;
      document.getElementById('errFirstName').textContent = 'required';
    }
    if (!lastName) {
      valid = false;
      document.getElementById('errLastName').textContent = 'required';
    }
    if (!sexInput) {
      valid = false;
      document.getElementById('errSex').textContent = 'required';
    }
    if (!email) {
      valid = false;
      document.getElementById('errEmail').textContent = 'required';
    }
    if (!password) {
      valid = false;
      document.getElementById('errPassword').textContent = 'required';
    }
    if (!reason) {
      valid = false;
      document.getElementById('errReason').textContent = 'required';
    }

    if (valid) {
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('sex', sexInput.value);
      localStorage.setItem('email', email);
      localStorage.setItem('reason', reason);
      window.location.href = "proj_profile_loreto.html";
    }
  });
  