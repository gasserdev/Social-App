export default function Home() {
  return `
    <div class="vh-100 d-flex flex-column justify-content-center align-items-center text-center"
         style="background: linear-gradient(to right, #6a11cb, #2575fc);">
      <h1 class="text-white mb-5 display-4 fw-bold">Welcome to My App</h1>
      <div class="d-flex gap-3">
        <a href="/login" class="btn btn-primary btn-lg px-5 py-3 shadow-lg">Login</a>
        <a href="/register" class="btn btn-success btn-lg px-5 py-3 shadow-lg">Register</a>
      </div>
    </div>
  `;
}
