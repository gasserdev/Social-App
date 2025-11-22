import { login , loginWithGoogle } from '../firebase/auth.js';

export function LoginUI() {
  return `
    <div class="vh-100 d-flex flex-column justify-content-center align-items-center text-center"
         style="background: linear-gradient(to right, #6a11cb, #2575fc);">
      <h1 class="text-white mb-5 display-4 fw-bold">Login to Your Account</h1>

      <form id="loginForm" class="d-flex  flex-column gap-3 p-4 rounded shadow-lg"
            style="background: rgba(255,255,255,0.1); min-width: 350px;">
          <input type="email" id="email" placeholder="Email" class="form-control form-control-lg" required>
          <input type="password" id="password" placeholder="Password" class="form-control form-control-lg" required>
          <button type="submit" id="loginBtn" class="btn btn-primary btn-lg">Login</button>
          <button type="button" id="googleBtn" class="btn btn-danger btn-lg mt-2">
          <i class="fab fa-google me-2"></i> Sign in with Google
        </button>
      </form>

      <div class="mt-3 w-25">
        <a href="/register" class="btn w-100 btn-success btn-lg">Register</a>
      </div>
    </div>
  `;
}

export function LoginLogic() {
  const form = document.getElementById("loginForm");
  const googleBtn = document.getElementById("googleBtn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await login(email, password);
      console.log("Login success!");
      page.redirect('/dashboard')
    } catch (err) {
      console.log(err.message);
    }
  });

  googleBtn.addEventListener("click", async () => {
    try {
      await loginWithGoogle();
      console.log("Google Login success!");
      page.redirect('/dashboard')
    } catch (err) {
      console.log(err.message);
    }
  });

}
