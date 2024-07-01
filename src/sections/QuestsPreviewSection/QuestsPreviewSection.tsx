import { QuestsPreviewCardsInfo } from '../../utils/QuestsPreviewCardsInfo';
import './QuestsPreviewSection.scss';
import { IQuestsPreviewInfo } from '../../types/apiTypes';
import { QuestsPreviewCard } from '../../components/QuestsPreviewCard/QuestsPreviewCard';

export const QuestsPreviewSection = () => {
  return (
    <section className='questPreview__section'>
      <h2 className='questPreview__title'>Нашит квесты</h2>
      <p className='questPreview__subtitle'>
        Каждый из этих квестов позволит вам погрузиться в увлекательный мир приключений, испытать свои интеллектуальные
        и физические способности, а также почувствовать себя героями настоящего приключенческого фильма.
      </p>

      <div className='questPreview__cards-wrapp'>
        {QuestsPreviewCardsInfo.map((cardInfo: IQuestsPreviewInfo) => (
          <QuestsPreviewCard cardInfo={cardInfo} key={`${cardInfo.id}${cardInfo.name}`} />
        ))}
      </div>
    </section>
  );
};
