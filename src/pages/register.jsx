import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <form className="col-lg-3">
          <h1 className="text-left">Registre-se</h1>
          <p className="text-left">
            Preencha o formulário abaixo para criar uma conta.
          </p>
          <div className="mb-3">
            <label htmlFor="inputName1" className="form-label">
              Nome Completo
            </label>
            <input type="text" className="form-control" id="inputName1" />
          </div>
          <div className="mb-3">
            <label htmlFor="inputEmail1" className="form-label">
              Endereço de Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword1" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary w-50">
            Cadastrar-se
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
