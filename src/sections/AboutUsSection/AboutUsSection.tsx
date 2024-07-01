import { Divider } from 'antd';
import './AboutUsSection.scss';

export const AboutUsSection = () => {
  return (
    <section className='about__section'>
      <h2 className='about__title'>О нас</h2>
      <div className='about__info-block'>
        <div className='about__info'>
          <p>
            <h1>F5</h1> — ведущая компания в сфере создания и проведения квестов, погружающих участников в увлекательные
            и незабываемые приключения. С момента нашего основания в 2010 году, мы стремимся предлагать уникальные и
            инновационные сценарии, которые бросают вызов воображению и интеллекту наших гостей.
          </p>
          <p>
            <span>Наша миссия</span> — дарить людям радость и яркие эмоции через тщательно проработанные квесты. Мы
            уверены, что каждый квест — это не просто игра, а целое приключение, которое объединяет людей и помогает им
            раскрыть свой потенциал.
          </p>
        </div>
        <Divider type='vertical' className='about__info-block-divider' />

        <div className='about__advantages'>
          <h2 className='about__advantages-title'> Почему выбирают нас:</h2>
          <div className='about__advantages-item'>
            <h2 className='advantages-item__title'>Высокое качество</h2>
            <p className='advantages-item__subtitle'>
              Мы уделяем внимание каждой детали, от сценария до декораций, чтобы создать полное погружение в атмосферу
              квеста
            </p>
          </div>
          <div className='about__advantages-item'>
            <h2 className='advantages-item__title'>Инновационные технологии</h2>
            <p className='advantages-item__subtitle'>
              Используем современные технологии и спецэффекты для создания уникальных игровых опытов
            </p>
          </div>
          <div className='about__advantages-item'>
            <h2 className='advantages-item__title'>Безопасность</h2>
            <p className='advantages-item__subtitle'>
              Важнейший приоритет для нас — безопасность участников, поэтому мы тщательно проверяем все элементы
              квестов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
