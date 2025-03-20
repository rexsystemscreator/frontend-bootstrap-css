import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <form className="col-lg-3 p-4 border border-1 rounded-3">
          <h1 className="text-left">Registre-se</h1>
          <p className="text-left">
            Preencha o formulário abaixo para criar uma conta.
          </p>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="inputName1"
              placeholder="Nome"
            />
          </div>
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
            Cadastrar
          </button>
          <p className="mt-3">
            Já tem uma conta? <Link to="/login">Faça login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
