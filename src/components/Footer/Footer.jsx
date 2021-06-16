import React from 'react';
import '../../App.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <div className="info">
          <h4>Hzone</h4>
          <li>
            <a href="/#">Sobre</a>
          </li>
          <li>
            <a href="/#">Avaliações</a>
          </li>
          <li>
            <a href="/#">Certificados</a>
          </li>
          <li>
            <a href="/#">Políticas de Privacidade</a>
          </li>
          <li>
            <a href="/#">Lojas hzone</a>
          </li>
        </div>
        <div className="info">
          <h4>Dúvidas frequentes</h4>
          <li>
            <a href="/#">Troca</a>
          </li>
          <li>
            <a href="/#">Devolução</a>
          </li>
          <li>
            <a href="/#">Garantia</a>
          </li>
          <li>
            <a href="/#">Produto com defeito</a>
          </li>
          <li>
            <a href="/#">Prazo de entrega</a>
          </li>
        </div>
        <div className="info">
          <h4>Parceiros</h4>
          <li>
            <a href="/#">Apple</a>
          </li>
          <li>
            <a href="/#">Samsung</a>
          </li>
          <li>
            <a href="/#">Motorola</a>
          </li>
          <li>
            <a href="/#">Asus</a>
          </li>
        </div>
        <div className="newsletter">
          <div className="email">
            <h5>Cadastre-se</h5>
            <input type="email" placeholder="Seu email..." />
            <button>Enviar</button>
          </div>
        </div>
        <div className="copyright">
          <p className="text-center">Copyright &copy; 2020 | HZONE</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
