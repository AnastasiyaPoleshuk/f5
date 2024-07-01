import './WelcomeSection.scss';

export const WelcomeSection = () => {
  return (
    <>
      <section className='welcome'>
        <div className='welcome__background'>
          <h1 className='welcome__title'>
            Квест комнаты <span>F5</span>
          </h1>
          <p className='welcome__subtitle'>
            Готовы ли вы встретиться лицом к лицу с вашими худшими кошмарами? Забронируйте игру и погрузись в{' '}
            <span>хаос</span>
          </p>
          <button className='welcome__button'>Забронировать</button>
        </div>
      </section>

      <div className='welcome__game game'>
        <div className='game__wrap'>
          <h2 className='game__text'>Сможешь найти выход?</h2>
        </div>
      </div>
    </>
  );
};
