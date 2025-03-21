import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <form className="col-lg-3 p-4 border rounded-3">
          <h1 className="text-left">Entrar</h1>
          <p className="text-left">
            Preencha o formulário abaixo para fazer login.
          </p>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="inputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="inputPassword1"
              placeholder="Senha"
            />
          </div>
          <button type="submit" className="btn btn-primary w-50">
            Entrar
          </button>
          <p className="mt-3">
            <Link to="/forgot-password">Esqueci minha senha</Link>
          </p>
          <p className="mt-3">
            Não tem uma conta? <Link to="/register">Registre-se</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
