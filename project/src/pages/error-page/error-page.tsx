function ErrorPage(): JSX.Element {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Ошибка 404. Страница не существует.</h1>
      <a href="/">Вернуться</a>
    </div>
  );
}

export default ErrorPage;
