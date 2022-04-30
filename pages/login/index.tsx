/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import ExtraLink from '../../components/ExtraLink';

const Login = () => {
  return (
    <header css={headerstyle}>
      <h1 css={logostyle}>
        <ExtraLink href="/">
          <img src="img/Log.svg" alt="logoimg" />
        </ExtraLink>
      </h1>
      <ul css={menustyle}>
        <li css={liststyle}>
          <ExtraLink href="/">홈</ExtraLink>
        </li>
        <li css={liststyle}>
          <ExtraLink href="/">타임라인</ExtraLink>
        </li>
        <li css={liststyle}>
          <ExtraLink href="/">설정</ExtraLink>
        </li>
      </ul>
    </header>
  );
};

const logostyle = css`
  margin: 0;
  width: 200px;
`;

const headerstyle = css`
  display: flex;
  position: fixed;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  z-index: 100;
`;

const menustyle = css`
  display: inline-block;
  list-style: none;
  height: 100%;
  align-items: center;
`;

const liststyle = css`
  display: inline-block;
  align-items: center;
  padding: 20px;
`;

export default Login;
