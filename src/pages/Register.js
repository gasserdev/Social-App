import { register , loginWithGoogle } from '../firebase/auth.js';

export function RegisterUI() {
  return `
    <div class="vh-100 d-flex flex-column justify-content-center align-items-center text-center"
         style="background: linear-gradient(to right, #6a11cb, #2575fc);">
      <h1 class="text-white mb-5 display-4 fw-bold">Create Your Account</h1>

      <form id="registerForm" class="d-flex flex-column gap-3 p-4 rounded shadow-lg"
            style="background: rgba(255,255,255,0.1); min-width: 350px;">
          <input type="text" id="name" placeholder="Name" class="form-control form-control-lg" required>
          <input type="email" id="email" placeholder="Email" class="form-control form-control-lg" required>
          <input type="password" id="password" placeholder="Password" class="form-control form-control-lg" required>
          <button type="submit" id="registerBtn" class="btn btn-primary btn-lg">Register</button>
          <button type="button" id="googleBtn" class="btn btn-danger btn-lg mt-2">
            <i class="fab fa-google me-2"></i> Sign up with Google
          </button>
      </form>

      <div class="mt-3">
        <a href="/login" class="btn btn-success btn-lg">Already have an account? Login</a>
      </div>
    </div>
  `;
}

export function RegisterLogic() {
  const form = document.getElementById("registerForm");
  const googleBtn = document.getElementById("googleBtn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;

    try {
      await register(email, password, name);

      console.log("Register success!");
      page.redirect('/dashboard');
    } catch (err) {
      console.log(err.message);
    }
  });

  googleBtn.addEventListener("click", async () => {
    try {
      await loginWithGoogle();
      console.log("Google Register/Login success!");
      page.redirect('/dashboard');
    } catch (err) {
      console.log(err.message);
    }
  });
}
