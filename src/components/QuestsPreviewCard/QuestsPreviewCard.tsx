import { Button, Card } from 'antd';
import { IQuestsPreviewInfo } from '../../types/apiTypes';
import './QuestsPreviewCard.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { CONSTANTS } from '../../utils/constants';

export const QuestsPreviewCard = ({ cardInfo }: { cardInfo: IQuestsPreviewInfo }) => {
  const navigate = useNavigate();

  const goToQuestPage = () => {
    navigate(CONSTANTS.ROUTE.QUEST_PAGE);
  };

  return (
    <Card
      title={cardInfo.name}
      extra={
        <Button type='text' onClick={goToQuestPage} className='card__link'>
          Узнать больше
        </Button>
      }
      style={{ width: 400 }}
      styles={{ header: { color: '#d5d5d5', borderBottom: '1px solid #760606' } }}
      className='quest-preview__card card'
    >
      <p>{cardInfo.sortDescription}</p>
      <Button type='default' className='card__button'>
        Забронировать
      </Button>
    </Card>
  );
};
